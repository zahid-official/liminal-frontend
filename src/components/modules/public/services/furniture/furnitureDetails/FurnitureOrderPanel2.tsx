"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Check } from "lucide-react";
import { IFurniture } from "../furnitureData";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Field, FieldLabel, FieldContent, FieldError } from "@/components/ui/field";
import LiminalButton from "@/components/shared/LiminalButton";

interface FurnitureOrderPanelProps {
  isOpen: boolean;
  onClose: () => void;
  furniture: IFurniture;
}

const FurnitureOrderPanel = ({ isOpen, onClose, furniture }: FurnitureOrderPanelProps) => {
  const { title, price, thumbnail, status, specifications } = furniture;

  // Form State
  const [step, setStep] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [deliveryInfo, setDeliveryInfo] = useState({
    address: "",
    city: "",
    zip: "",
    notes: "",
  });
  const [interestReason, setInterestReason] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Helper to check if status is Out of Stock
  const isOutOfStock = status === "Out of Stock";

  // Total Steps count
  const totalSteps = isOutOfStock ? 2 : 5; // Quantity -> Info -> Delivery -> Review -> Success

  // Price calculations
  const numericPrice = parseFloat(price.replace(/[^0-9.]/g, "")) || 0;
  const totalPriceFormatted = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(numericPrice * quantity);

  // Validation
  const validateStep = (currentStep: number) => {
    const newErrors: Record<string, string> = {};

    if (isOutOfStock) {
      if (currentStep === 1) {
        if (!customerInfo.name.trim()) newErrors.name = "Name is required";
        if (!customerInfo.email.trim()) {
          newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(customerInfo.email)) {
          newErrors.email = "Invalid email format";
        }
        if (!interestReason.trim()) {
          newErrors.interestReason = "Please let us know your interest";
        }
      }
    } else {
      if (currentStep === 2) {
        if (!customerInfo.name.trim()) newErrors.name = "Name is required";
        if (!customerInfo.email.trim()) {
          newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(customerInfo.email)) {
          newErrors.email = "Invalid email format";
        }
        if (!customerInfo.phone.trim()) newErrors.phone = "Phone number is required";
      } else if (currentStep === 3) {
        if (!deliveryInfo.address.trim()) newErrors.address = "Address is required";
        if (!deliveryInfo.city.trim()) newErrors.city = "City is required";
        if (!deliveryInfo.zip.trim()) newErrors.zip = "Postal code is required";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    setStep((prev) => Math.max(1, prev - 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(step)) return;

    setIsSubmitting(true);

    // Mock API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Submitted Order/Interest Request:", {
      furnitureId: furniture.id,
      productTitle: title,
      status,
      quantity: isOutOfStock ? 0 : quantity,
      customerInfo,
      deliveryInfo: isOutOfStock ? null : deliveryInfo,
      interestReason: isOutOfStock ? interestReason : null,
      totalAmount: isOutOfStock ? "$0" : totalPriceFormatted,
      orderDate: new Date().toISOString(),
    });

    setIsSubmitting(false);
    setIsSuccess(true);
  };

  // Close reset handler
  const handleClose = () => {
    onClose();
    // Reset state after close animation completes
    setTimeout(() => {
      setStep(1);
      setQuantity(1);
      setCustomerInfo({ name: "", email: "", phone: "" });
      setDeliveryInfo({ address: "", city: "", zip: "", notes: "" });
      setInterestReason("");
      setErrors({});
      setIsSuccess(false);
    }, 300);
  };

  if (!isOpen) return null;

  // Title depending on Status
  const getPanelTitle = () => {
    switch (status) {
      case "In Stock":
        return "Complete Your Order";
      case "Limited Edition":
        return "Secure Your Piece";
      case "Made to Order":
        return "Commission This Piece";
      case "Pre-Order":
        return "Reserve Your Piece";
      case "Out of Stock":
      default:
        return "Register Interest";
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-foreground/20 backdrop-blur-xs transition-opacity duration-500 cursor-pointer animate-in fade-in"
        onClick={handleClose}
      />

      {/* Slide-over Content Container */}
      <div className="absolute inset-y-0 right-0 pl-10 max-w-full flex">
        <div className="w-screen max-w-md sm:max-w-lg bg-background border-l border-border/20 shadow-2xl flex flex-col h-full relative z-10 animate-in slide-in-from-right duration-500 ease-out">
          
          {/* Header */}
          <div className="px-6 py-6 border-b border-border/10 flex items-center justify-between">
            <h2 className="text-xl font-bold font-heading tracking-tight text-foreground">
              {getPanelTitle()}
            </h2>
            <button
              onClick={handleClose}
              className="p-2 rounded-full hover:bg-zinc-100 text-muted-foreground hover:text-foreground cursor-pointer transition-colors"
              aria-label="Close panel"
            >
              <X className="size-5" />
            </button>
          </div>

          {/* Product Quick View Card */}
          <div className="px-6 py-4 bg-zinc-50 border-b border-border/10 flex gap-4 items-center">
            <div className="relative size-16 bg-background rounded-xs border border-border/20 overflow-hidden shrink-0">
              <Image src={thumbnail} alt={title} fill className="object-cover" />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="font-heading font-bold text-base truncate">{title}</h3>
              <p className="text-xs text-muted-foreground/80 font-mono tracking-wider uppercase mt-0.5">
                Status: {status}
              </p>
            </div>
            <div className="text-right">
              <span className="text-sm font-bold text-liminal-secondary block">
                {price}
              </span>
              <span className="text-[10px] text-muted-foreground font-mono">
                {isOutOfStock ? "MSRP" : "Unit Price"}
              </span>
            </div>
          </div>

          {/* Form Content Scrollable */}
          <div className="flex-1 overflow-y-auto px-6 py-8">
            {isSuccess ? (
              /* SUCCESS STATE */
              <div className="flex flex-col items-center justify-center text-center h-full py-10 space-y-6">
                <div className="size-16 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-500">
                  <Check className="size-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold font-heading">
                    {isOutOfStock ? "Interest Registered" : "Order Request Received"}
                  </h3>
                  <p className="text-sm text-muted-foreground font-light max-w-sm">
                    {isOutOfStock
                      ? "Thank you for registering your interest. We will notify you immediately once this piece becomes available again."
                      : "Your commission details have been saved. Our representative will contact you via email or phone within 24 hours to confirm shipment details."}
                  </p>
                </div>
                <div className="pt-4">
                  <LiminalButton onClick={handleClose} variant="outline" showIcon={false}>
                    Return to Product Details
                  </LiminalButton>
                </div>
              </div>
            ) : (
              /* MULTI STEP FORM */
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Step Indicator */}
                <div className="flex items-center justify-between text-xs font-mono tracking-widest text-muted-foreground/60 mb-6 uppercase">
                  <span>Step {step} of {totalSteps}</span>
                  <div className="flex gap-1">
                    {Array.from({ length: totalSteps }).map((_, i) => (
                      <div
                        key={i}
                        className={`h-1 w-6 rounded-full transition-all duration-300 ${
                          step >= i + 1 ? "bg-liminal-secondary" : "bg-border/30"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* OUT OF STOCK FORM FLOW */}
                {isOutOfStock && (
                  <>
                    {step === 1 && (
                      <div className="space-y-5">
                        <div className="p-4 bg-amber-50/50 border border-amber-200/40 rounded-sm mb-4">
                          <p className="text-[12px] font-light text-amber-800 leading-relaxed">
                            This Limited Edition piece is currently out of stock. Leave your contact details below to join the priority waitlist and receive notifications of potential re-releases or cancellations.
                          </p>
                        </div>

                        <Field invalid={!!errors.name}>
                          <FieldLabel htmlFor="name">Your Name</FieldLabel>
                          <FieldContent>
                            <Input
                              id="name"
                              value={customerInfo.name}
                              onChange={(e) =>
                                setCustomerInfo((prev) => ({ ...prev, name: e.target.value }))
                              }
                              placeholder="John Doe"
                              className="h-10 border-border/50 focus-visible:border-liminal-secondary focus-visible:ring-liminal-secondary/15"
                            />
                            {errors.name && <FieldError>{errors.name}</FieldError>}
                          </FieldContent>
                        </Field>

                        <Field invalid={!!errors.email}>
                          <FieldLabel htmlFor="email">Email Address</FieldLabel>
                          <FieldContent>
                            <Input
                              id="email"
                              type="email"
                              value={customerInfo.email}
                              onChange={(e) =>
                                setCustomerInfo((prev) => ({ ...prev, email: e.target.value }))
                              }
                              placeholder="john@example.com"
                              className="h-10 border-border/50 focus-visible:border-liminal-secondary focus-visible:ring-liminal-secondary/15"
                            />
                            {errors.email && <FieldError>{errors.email}</FieldError>}
                          </FieldContent>
                        </Field>

                        <Field invalid={!!errors.interestReason}>
                          <FieldLabel htmlFor="reason">Why are you interested in this piece?</FieldLabel>
                          <FieldContent>
                            <Textarea
                              id="reason"
                              value={interestReason}
                              onChange={(e) => setInterestReason(e.target.value)}
                              placeholder="Let us know if you require a specific dimensions, or material variations."
                              className="min-h-24 border-border/50 focus-visible:border-liminal-secondary focus-visible:ring-liminal-secondary/15"
                            />
                            {errors.interestReason && (
                              <FieldError>{errors.interestReason}</FieldError>
                            )}
                          </FieldContent>
                        </Field>
                      </div>
                    )}

                    {step === 2 && (
                      <div className="space-y-6">
                        <h4 className="text-[14px] font-mono tracking-widest uppercase text-muted-foreground mb-4">
                          Review Your Details
                        </h4>
                        <div className="bg-zinc-50 border border-border/20 rounded-sm p-5 space-y-4 text-sm font-light">
                          <div className="flex justify-between border-b border-border/10 pb-2.5">
                            <span className="text-muted-foreground">Product</span>
                            <span className="font-semibold text-foreground uppercase">{title}</span>
                          </div>
                          <div className="flex justify-between border-b border-border/10 pb-2.5">
                            <span className="text-muted-foreground">Name</span>
                            <span className="font-semibold text-foreground">{customerInfo.name}</span>
                          </div>
                          <div className="flex justify-between border-b border-border/10 pb-2.5">
                            <span className="text-muted-foreground">Email</span>
                            <span className="font-semibold text-foreground">{customerInfo.email}</span>
                          </div>
                          <div className="flex flex-col gap-1.5">
                            <span className="text-muted-foreground">Notes / Specifications</span>
                            <p className="text-foreground bg-background p-3 rounded-xs border border-border/10 text-xs italic">
                              {interestReason}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                )}

                {/* IN STOCK / MADE TO ORDER / PRE-ORDER FLOW */}
                {!isOutOfStock && (
                  <>
                    {/* Step 1: Product Config & Lead Notice */}
                    {step === 1 && (
                      <div className="space-y-6">
                        {status === "Made to Order" && (
                          <div className="p-4 bg-blue-50/50 border border-blue-200/40 rounded-sm">
                            <p className="text-[12px] font-light text-blue-800 leading-relaxed">
                              This piece is handcrafted individually. The estimated craftsmanship period is{" "}
                              <strong>{specifications.leadTime}</strong>. Place your commission request below, and our designers will align with you on requirements.
                            </p>
                          </div>
                        )}

                        {status === "Pre-Order" && (
                          <div className="p-4 bg-indigo-50/50 border border-indigo-200/40 rounded-sm">
                            <p className="text-[12px] font-light text-indigo-800 leading-relaxed">
                              This design is currently in production. Estimated shipping starts in{" "}
                              <strong>{specifications.leadTime}</strong>. Pre-order now to secure allocation from our next batch.
                            </p>
                          </div>
                        )}

                        {status === "Limited Edition" && (
                          <div className="p-4 bg-amber-50/50 border border-amber-200/40 rounded-sm">
                            <p className="text-[12px] font-light text-amber-800 leading-relaxed">
                              Only <strong>{furniture.stock}</strong> pieces of this Limited Edition design remain. Secure your unit by submitting your order request today.
                            </p>
                          </div>
                        )}

                        {status === "In Stock" && (
                          <div className="p-4 bg-emerald-50/50 border border-emerald-200/40 rounded-sm">
                            <p className="text-[12px] font-light text-emerald-800 leading-relaxed">
                              This item is in stock and ready for immediate dispatch from our primary atelier.
                            </p>
                          </div>
                        )}

                        <div className="space-y-4">
                          <label className="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground/60 block">
                            Quantity Selection
                          </label>
                          <div className="flex items-center gap-4">
                            <button
                              type="button"
                              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                              className="size-10 border border-border/40 hover:border-border rounded-full flex items-center justify-center font-bold text-lg cursor-pointer transition-colors"
                            >
                              -
                            </button>
                            <span className="text-xl font-heading font-bold w-8 text-center">{quantity}</span>
                            <button
                              type="button"
                              onClick={() =>
                                setQuantity((q) =>
                                  status === "Limited Edition" ? Math.min(furniture.stock, q + 1) : q + 1
                                )
                              }
                              className="size-10 border border-border/40 hover:border-border rounded-full flex items-center justify-center font-bold text-lg cursor-pointer transition-colors"
                            >
                              +
                            </button>
                          </div>
                        </div>

                        <div className="bg-zinc-50 border border-border/20 rounded-sm p-5 space-y-3.5">
                          <div className="flex justify-between items-center text-sm">
                            <span className="text-muted-foreground font-light">Subtotal ({quantity} x {price})</span>
                            <span className="font-bold text-foreground">{totalPriceFormatted}</span>
                          </div>
                          <div className="flex justify-between items-center text-[11px] font-mono border-t border-border/10 pt-3">
                            <span className="text-muted-foreground uppercase">Estimated Shipping</span>
                            <span className="text-foreground uppercase">Calculated in next step</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Step 2: Customer Contact Info */}
                    {step === 2 && (
                      <div className="space-y-5">
                        <Field invalid={!!errors.name}>
                          <FieldLabel htmlFor="name">Your Full Name</FieldLabel>
                          <FieldContent>
                            <Input
                              id="name"
                              value={customerInfo.name}
                              onChange={(e) =>
                                setCustomerInfo((prev) => ({ ...prev, name: e.target.value }))
                              }
                              placeholder="John Doe"
                              className="h-10 border-border/50 focus-visible:border-liminal-secondary focus-visible:ring-liminal-secondary/15"
                            />
                            {errors.name && <FieldError>{errors.name}</FieldError>}
                          </FieldContent>
                        </Field>

                        <Field invalid={!!errors.email}>
                          <FieldLabel htmlFor="email">Email Address</FieldLabel>
                          <FieldContent>
                            <Input
                              id="email"
                              type="email"
                              value={customerInfo.email}
                              onChange={(e) =>
                                setCustomerInfo((prev) => ({ ...prev, email: e.target.value }))
                              }
                              placeholder="john@example.com"
                              className="h-10 border-border/50 focus-visible:border-liminal-secondary focus-visible:ring-liminal-secondary/15"
                            />
                            {errors.email && <FieldError>{errors.email}</FieldError>}
                          </FieldContent>
                        </Field>

                        <Field invalid={!!errors.phone}>
                          <FieldLabel htmlFor="phone">Phone Number</FieldLabel>
                          <FieldContent>
                            <Input
                              id="phone"
                              value={customerInfo.phone}
                              onChange={(e) =>
                                setCustomerInfo((prev) => ({ ...prev, phone: e.target.value }))
                              }
                              placeholder="+1 (555) 000-0000"
                              className="h-10 border-border/50 focus-visible:border-liminal-secondary focus-visible:ring-liminal-secondary/15"
                            />
                            {errors.phone && <FieldError>{errors.phone}</FieldError>}
                          </FieldContent>
                        </Field>
                      </div>
                    )}

                    {/* Step 3: Delivery Address */}
                    {step === 3 && (
                      <div className="space-y-5">
                        <Field invalid={!!errors.address}>
                          <FieldLabel htmlFor="address">Shipping Street Address</FieldLabel>
                          <FieldContent>
                            <Input
                              id="address"
                              value={deliveryInfo.address}
                              onChange={(e) =>
                                setDeliveryInfo((prev) => ({ ...prev, address: e.target.value }))
                              }
                              placeholder="123 Atelier Way"
                              className="h-10 border-border/50 focus-visible:border-liminal-secondary focus-visible:ring-liminal-secondary/15"
                            />
                            {errors.address && <FieldError>{errors.address}</FieldError>}
                          </FieldContent>
                        </Field>

                        <div className="grid grid-cols-2 gap-4">
                          <Field invalid={!!errors.city}>
                            <FieldLabel htmlFor="city">City</FieldLabel>
                            <FieldContent>
                              <Input
                                id="city"
                                value={deliveryInfo.city}
                                onChange={(e) =>
                                  setDeliveryInfo((prev) => ({ ...prev, city: e.target.value }))
                                }
                                placeholder="New York"
                                className="h-10 border-border/50 focus-visible:border-liminal-secondary"
                              />
                              {errors.city && <FieldError>{errors.city}</FieldError>}
                            </FieldContent>
                          </Field>

                          <Field invalid={!!errors.zip}>
                            <FieldLabel htmlFor="zip">Postal / ZIP Code</FieldLabel>
                            <FieldContent>
                              <Input
                                id="zip"
                                value={deliveryInfo.zip}
                                onChange={(e) =>
                                  setDeliveryInfo((prev) => ({ ...prev, zip: e.target.value }))
                                }
                                placeholder="10001"
                                className="h-10 border-border/50 focus-visible:border-liminal-secondary"
                              />
                              {errors.zip && <FieldError>{errors.zip}</FieldError>}
                            </FieldContent>
                          </Field>
                        </div>

                        <Field>
                          <FieldLabel htmlFor="notes">Delivery Instructions / Bespoke Notes (Optional)</FieldLabel>
                          <FieldContent>
                            <Textarea
                              id="notes"
                              value={deliveryInfo.notes}
                              onChange={(e) =>
                                setDeliveryInfo((prev) => ({ ...prev, notes: e.target.value }))
                              }
                              placeholder="Include details regarding floor height, freight elevator, or dimensional revisions."
                              className="min-h-24 border-border/50 focus-visible:border-liminal-secondary focus-visible:ring-liminal-secondary/15"
                            />
                          </FieldContent>
                        </Field>
                      </div>
                    )}

                    {/* Step 4: Final Summary Review */}
                    {step === 4 && (
                      <div className="space-y-6">
                        <h4 className="text-[11px] font-mono tracking-widest uppercase text-muted-foreground mb-4">
                          Final Review Summary
                        </h4>

                        <div className="border border-border/20 rounded-sm p-5 bg-zinc-50 space-y-4 text-sm font-light">
                          <div className="flex justify-between border-b border-border/10 pb-2">
                            <span className="text-muted-foreground">Product</span>
                            <span className="font-semibold text-foreground uppercase truncate max-w-[200px]">
                              {title}
                            </span>
                          </div>

                          <div className="flex justify-between border-b border-border/10 pb-2">
                            <span className="text-muted-foreground">Allocation (Units)</span>
                            <span className="font-semibold text-foreground font-mono">{quantity}</span>
                          </div>

                          <div className="flex justify-between border-b border-border/10 pb-2">
                            <span className="text-muted-foreground">Commission Valuation</span>
                            <span className="font-bold text-liminal-secondary font-heading text-base">
                              {totalPriceFormatted}
                            </span>
                          </div>

                          <div className="flex justify-between border-b border-border/10 pb-2">
                            <span className="text-muted-foreground">Customer Contact</span>
                            <span className="font-semibold text-foreground text-right">
                              {customerInfo.name} <br />
                              <span className="text-xs text-muted-foreground font-mono lowercase font-normal">
                                {customerInfo.email}
                              </span>
                            </span>
                          </div>

                          <div className="flex flex-col gap-1">
                            <span className="text-muted-foreground">Shipping Destination</span>
                            <p className="font-semibold text-foreground">
                              {deliveryInfo.address}, {deliveryInfo.city} ({deliveryInfo.zip})
                            </p>
                          </div>

                          {deliveryInfo.notes.trim() && (
                            <div className="flex flex-col gap-1">
                              <span className="text-muted-foreground">Bespoke instructions</span>
                              <p className="text-foreground p-3 rounded-xs bg-background border border-border/10 text-xs italic">
                                {deliveryInfo.notes}
                              </p>
                            </div>
                          )}
                        </div>

                        <div className="p-4 bg-zinc-100 rounded-sm">
                          <p className="text-[11px] font-light text-muted-foreground leading-normal">
                            Note: This is a commission request placement. No transaction takes place immediately. Our team will contact you directly to discuss shipping logistics, trade pricing alignments, and payment schedules.
                          </p>
                        </div>
                      </div>
                    )}
                  </>
                )}

                {/* Navigation Buttons Block */}
                <div className="flex items-center gap-4 pt-6 border-t border-border/10">
                  {step > 1 && (
                    <button
                      type="button"
                      onClick={handlePrev}
                      className="h-12 px-6 border border-border/60 hover:bg-zinc-50 rounded-full flex items-center justify-center gap-2 cursor-pointer text-sm font-semibold transition-all duration-300"
                    >
                      <ChevronLeft className="size-4" /> Back
                    </button>
                  )}

                  {step < totalSteps ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="flex-1 h-12 bg-foreground text-background hover:bg-foreground/90 rounded-full flex items-center justify-center gap-2 cursor-pointer text-sm font-semibold transition-all duration-300 ml-auto"
                    >
                      Continue <ChevronRight className="size-4" />
                    </button>
                  ) : (
                    <LiminalButton
                      type="submit"
                      isLoading={isSubmitting}
                      className="flex-1"
                      showIcon={false}
                    >
                      {isOutOfStock ? "Register Interest" : "Submit Commission"}
                    </LiminalButton>
                  )}
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default FurnitureOrderPanel;
