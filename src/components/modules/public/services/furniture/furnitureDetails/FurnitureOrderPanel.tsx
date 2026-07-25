"use client";

import LiminalButton from "@/components/shared/LiminalButton";
import {
  Field,
  FieldContent,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { Check, ChevronLeft, ChevronRight, Minus, Plus, X } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { IFurniture } from "../furnitureData";

interface FurnitureOrderPanelProps {
  isOpen: boolean;
  onClose: () => void;
  furniture: IFurniture;
}

const FurnitureOrderPanel = ({
  isOpen,
  onClose,
  furniture,
}: FurnitureOrderPanelProps) => {
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
  const totalSteps = isOutOfStock ? 2 : 4; // Quantity -> Info -> Delivery -> Review & Submit

  // Price & Shipping calculations
  const numericPrice = parseFloat(price.replace(/[^0-9.]/g, "")) || 0;
  const subtotal = numericPrice * quantity;
  const shippingFee = subtotal >= 1000 ? 0 : 20;
  const grandTotal = subtotal + shippingFee;

  const totalPriceFormatted = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(subtotal);

  const shippingFormatted =
    shippingFee === 0
      ? "$0"
      : new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
          maximumFractionDigits: 0,
        }).format(shippingFee);

  const grandTotalFormatted = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(grandTotal);

  // Customer Info Items
  const customerInfoItems = [
    { label: "Name", value: customerInfo.name },
    { label: "Email", value: customerInfo.email },
    { label: "Interest Reason", value: interestReason, isBlock: true },
  ];

  // Order Summary Items
  const orderSummaryItems = [
    { label: "Quantity", value: quantity },
    { label: "Unit Price", value: price },
    { label: "Subtotal", value: totalPriceFormatted },
    {
      label:
        shippingFee === 0 ? "Shipping (Free on orders over $1000)" : "Shipping",
      value: shippingFormatted,
    },
    { label: "Total Amount", value: grandTotalFormatted, isTotal: true },
  ];

  // Final Review Summary Items
  const finalReviewSummaryItems = [
    { label: "Quantity", value: quantity },
    { label: "Unit Price", value: price },
    { label: "Subtotal", value: totalPriceFormatted },
    {
      label:
        shippingFee === 0 ? "Shipping (Free on orders over $1000)" : "Shipping",
      value: shippingFormatted,
    },
    { label: "Total Amount", value: grandTotalFormatted },
    {
      label: "Customer Contact",
      value: customerInfo.name,
      subValue: customerInfo.email,
    },
    {
      label: "Shipping Destination",
      value: `${deliveryInfo.address}, ${deliveryInfo.city} (${deliveryInfo.zip})`,
    },
  ];

  // Product Status Notices Config
  const statusNotices: Record<
    string,
    { containerClass: string; textClass: string; content: React.ReactNode }
  > = {
    "Made to Order": {
      containerClass: "bg-blue-50/50 border-blue-200/40",
      textClass: "text-blue-800",
      content: (
        <>
          This piece is individually handcrafted upon order. The estimated
          artisan period is{" "}
          <strong>{specifications.leadTime || "standard lead time"}</strong>.
          Submit your order request below and our design team will personally
          coordinate your specifications.
        </>
      ),
    },
    "Pre-Order": {
      containerClass: "bg-indigo-50/50 border-indigo-200/40",
      textClass: "text-indigo-800",
      content: (
        <>
          This design is currently in production. Estimated dispatch begins in{" "}
          <strong>{specifications.leadTime || "upcoming schedule"}</strong>.
          Reserve your piece today to guarantee allocation from our upcoming
          atelier release.
        </>
      ),
    },
    "Limited Edition": {
      containerClass: "bg-amber-50/50 border-amber-200/40",
      textClass: "text-amber-800",
      content: (
        <>
          {furniture.stock && furniture.stock > 0 ? (
            <>
              Only <strong>{furniture.stock}</strong>{" "}
              {furniture.stock === 1 ? "piece" : "pieces"} remaining of this
              Limited Edition design.{" "}
            </>
          ) : (
            <>This limited edition design has rare availability. </>
          )}
          Submit your order request to secure your allocation.
        </>
      ),
    },
    "In Stock": {
      containerClass: "bg-zinc-50 border border-border/20",
      textClass: "text-muted-foreground",
      content: (
        <>
          This product is currently available in our primary atelier collection
          and prepared for immediate white-glove dispatch.{" "}
          {furniture.stock && furniture.stock > 0 ? (
            <>
              Only <strong>{furniture.stock}</strong>{" "}
              {furniture.stock === 1 ? "unit remains" : "units remain"}.{" "}
            </>
          ) : null}
          Place your order request to reserve your piece.
        </>
      ),
    },
    "Out of Stock": {
      containerClass: "bg-red-50/50 border border-red-200/40",
      textClass: "text-red-800",
      content: (
        <>
          This product is currently out of stock in our primary atelier
          collection. Leave your contact details below to join the priority
          waitlist and receive notifications of potential re-releases or
          cancellations.
        </>
      ),
    },
  };

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
        if (!customerInfo.phone.trim())
          newErrors.phone = "Phone number is required";
      } else if (currentStep === 3) {
        if (!deliveryInfo.address.trim())
          newErrors.address = "Address is required";
        if (!deliveryInfo.city.trim()) newErrors.city = "City is required";
        if (!deliveryInfo.zip.trim()) newErrors.zip = "Postal code is required";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    if (validateStep(step)) {
      setStep((prev) => Math.min(totalSteps, prev + 1));
    }
  };

  const handlePrev = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setStep((prev) => Math.max(1, prev - 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step < totalSteps) return;
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
    });

    setIsSubmitting(false);
    setIsSuccess(true);
  };

  // Handle mounted and animated state for smooth slide in & out
  const [isMounted, setIsMounted] = useState(isOpen);
  const [isVisible, setIsVisible] = useState(false);

  React.useEffect(() => {
    let animationFrameId1: number;
    let animationFrameId2: number;
    let unmountTimer: NodeJS.Timeout;

    if (isOpen) {
      // Defer mounting to animation frame so browser registers the initial closed state first
      animationFrameId1 = requestAnimationFrame(() => {
        setIsMounted(true);
        animationFrameId2 = requestAnimationFrame(() => {
          setIsVisible(true);
        });
      });
    } else {
      animationFrameId1 = requestAnimationFrame(() => {
        setIsVisible(false);
      });
      unmountTimer = setTimeout(() => {
        setIsMounted(false);
        // Reset state after unmounting animation completes
        setStep(1);
        setQuantity(1);
        setCustomerInfo({ name: "", email: "", phone: "" });
        setDeliveryInfo({ address: "", city: "", zip: "", notes: "" });
        setInterestReason("");
        setErrors({});
        setIsSuccess(false);
      }, 500);
    }

    return () => {
      cancelAnimationFrame(animationFrameId1);
      cancelAnimationFrame(animationFrameId2);
      clearTimeout(unmountTimer);
    };
  }, [isOpen]);

  // Close handler
  const handleClose = () => {
    onClose();
  };

  if (!isMounted) return null;

  // Title depending on Status
  const getPanelTitle = () => {
    switch (status) {
      case "In Stock":
        return "Complete Your Order";
      case "Limited Edition":
        return "Secure Your Piece";
      case "Made to Order":
        return "Order This Piece";
      case "Pre-Order":
        return "Reserve Your Piece";
      case "Out of Stock":
      default:
        return "Register Interest";
    }
  };

  // Subtitle / Eyebrow text above panel title
  const getPanelSubtitle = () => {
    switch (status) {
      case "In Stock":
        return "Immediate Purchase";
      case "Limited Edition":
        return "Exclusive Edition";
      case "Made to Order":
        return "Custom Creation";
      case "Pre-Order":
        return "Early Reservation";
      case "Out of Stock":
      default:
        return "Priority Waitlist";
    }
  };

  const inputClass =
    "w-full bg-transparent! border-b border-border/50 focus:border-liminal-secondary focus:outline-none py-2 text-sm font-light transition-all duration-300 rounded-none h-10 border-t-0 border-x-0 focus-visible:border-liminal-secondary focus-visible:ring-liminal-secondary/15 text-foreground";

  const textareaClass =
    "w-full min-h-24 bg-transparent! border-b border-border/50 focus:border-liminal-secondary focus:outline-none py-2 text-sm font-light transition-all duration-300 rounded-none resize-none border-t-0 border-x-0 focus-visible:border-liminal-secondary focus-visible:ring-liminal-secondary/15 text-foreground";

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className={cn(
          "absolute inset-0 bg-foreground/20 backdrop-blur-xs transition-opacity duration-500 ease-in-out cursor-pointer",
          isVisible ? "opacity-100" : "opacity-0"
        )}
        onClick={handleClose}
      />

      {/* Slide-over Content Container */}
      <div className="absolute inset-y-0 right-0 pl-10 max-w-full flex">
        <div
          className={cn(
            "w-screen max-w-md sm:max-w-lg bg-background border-l border-border/20 shadow-2xl flex flex-col h-full relative z-10 transition-transform duration-500 ease-in-out",
            isVisible ? "translate-x-0" : "translate-x-full"
          )}
        >
          {/* Header */}
          {!isSuccess && (
            <div className="p-6 border-b border-border/10 flex items-center justify-between">
              {/* Titles */}
              <div>
                <span className="text-[9px] font-mono tracking-widest text-liminal-secondary uppercase font-bold block">
                  {getPanelSubtitle()}
                </span>

                <h2 className="text-lg font-bold font-heading tracking-tight text-foreground uppercase">
                  {getPanelTitle()}
                </h2>
              </div>

              {/* Close Button */}
              <button
                onClick={handleClose}
                className="p-2 rounded-full hover:bg-zinc-100 text-muted-foreground hover:text-foreground cursor-pointer transition-colors"
                aria-label="Close panel"
              >
                <X className="size-5" />
              </button>
            </div>
          )}

          {/* Product Quick View Card */}
          {!isSuccess && (
            <div className="px-6 py-4 bg-zinc-50 border-b border-border/10 flex gap-4 items-center">
              {/* product image */}
              <div className="relative size-16 bg-background rounded border border-border/20 overflow-hidden shrink-0">
                <Image
                  src={thumbnail}
                  alt={title}
                  fill
                  className="object-cover rounded"
                />
              </div>

              {/* product title */}
              <div className="flex-1">
                <h3 className="font-heading font-bold truncate uppercase">
                  {title}
                </h3>
                <p className="text-[10px] text-muted-foreground/80 font-mono tracking-wider uppercase mt-0.5">
                  Status: {status}
                </p>
              </div>

              {/* price */}
              <div className="text-right">
                <h3 className="font-heading font-bold">{price}</h3>
                <p className="text-[10px] text-muted-foreground/80 font-mono tracking-wider uppercase mt-0.5">
                  Per Unit
                </p>
              </div>
            </div>
          )}

          {/* Form Content Scrollable */}
          <div className="flex-1 overflow-y-auto px-6 py-8">
            {isSuccess ? (
              /* Success State */
              <div className="flex flex-col items-center justify-center text-center h-full py-10 space-y-6">
                <div className="size-16 rounded-full bg-liminal-secondary/10 border border-liminal-secondary/20 flex items-center justify-center text-liminal-secondary">
                  <Check className="size-8 stroke-[2.5]" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold font-heading">
                    {isOutOfStock
                      ? "Interest Registered"
                      : "Order Request Received"}
                  </h3>
                  <p className="text-sm text-muted-foreground font-light max-w-sm leading-relaxed">
                    {isOutOfStock
                      ? "Thank you for registering your interest. We will notify you immediately once this piece becomes available again."
                      : "Your order request has been recorded. Our representative will contact you via email or phone within 24 hours to confirm shipment details."}
                  </p>
                </div>

                <div className="pt-2">
                  <LiminalButton
                    onClick={handleClose}
                    variant="outline"
                    showIcon={false}
                  >
                    Return to Product Details
                  </LiminalButton>
                </div>
              </div>
            ) : (
              /* Multi Step Form */
              <div className="space-y-6">
                {/* Step Indicator */}
                <div className="flex items-center justify-between text-xs font-mono tracking-wider text-muted-foreground/60 mb-6 uppercase">
                  <span>
                    Step {step} of {totalSteps}
                  </span>

                  <div className="flex gap-1">
                    {Array.from({ length: totalSteps }).map((_, i) => (
                      <div
                        key={i}
                        className={`h-0.75 w-6 rounded-full transition-all duration-300 ${
                          step >= i + 1
                            ? "bg-liminal-secondary"
                            : "bg-border/30"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Out Of Stock Form Flow */}
                {isOutOfStock && (
                  <>
                    {/* Step 1: Out of Stock Notice */}
                    {step === 1 && (
                      <div className="space-y-6">
                        {/* Status Notice */}
                        {statusNotices[status] && (
                          <div
                            className={cn(
                              "p-4 rounded-sm mb-4",
                              statusNotices[status].containerClass,
                            )}
                          >
                            <p
                              className={cn(
                                "text-[12px] font-light leading-relaxed",
                                statusNotices[status].textClass,
                              )}
                            >
                              {statusNotices[status].content}
                            </p>
                          </div>
                        )}

                        {/* Contact Information Form */}
                        <div className="space-y-6 pt-4">
                          {/* Full Name */}
                          <Field invalid={!!errors.name}>
                            <FieldLabel htmlFor="name">Full Name</FieldLabel>
                            <FieldContent>
                              <Input
                                id="name"
                                value={customerInfo.name}
                                onChange={(e) =>
                                  setCustomerInfo((prev) => ({
                                    ...prev,
                                    name: e.target.value,
                                  }))
                                }
                                placeholder="e.g. John Doe"
                                className={inputClass}
                              />
                              {errors.name && (
                                <FieldError>{errors.name}</FieldError>
                              )}
                            </FieldContent>
                          </Field>

                          {/* Email Address */}
                          <Field invalid={!!errors.email}>
                            <FieldLabel htmlFor="email">
                              Email Address
                            </FieldLabel>
                            <FieldContent>
                              <Input
                                id="email"
                                type="email"
                                value={customerInfo.email}
                                onChange={(e) =>
                                  setCustomerInfo((prev) => ({
                                    ...prev,
                                    email: e.target.value,
                                  }))
                                }
                                placeholder="john@example.com"
                                className={inputClass}
                              />
                              {errors.email && (
                                <FieldError>{errors.email}</FieldError>
                              )}
                            </FieldContent>
                          </Field>

                          {/* Interest reason */}
                          <Field invalid={!!errors.interestReason}>
                            <FieldLabel htmlFor="reason">
                              Why are you interested in this piece?
                            </FieldLabel>
                            <FieldContent>
                              <Textarea
                                id="reason"
                                value={interestReason}
                                onChange={(e) =>
                                  setInterestReason(e.target.value)
                                }
                                placeholder="Let us know if you require a specific dimensions, or material variations."
                                className={textareaClass}
                              />
                              {errors.interestReason && (
                                <FieldError>{errors.interestReason}</FieldError>
                              )}
                            </FieldContent>
                          </Field>
                        </div>
                      </div>
                    )}

                    {step === 2 && (
                      <div className="space-y-6">
                        <h3 className="text-lg font-semibold mb-3">
                          Review Your Details
                        </h3>

                        {/* Product and Customer Information */}
                        <div className="bg-zinc-50 border border-border/20 rounded-sm p-5 space-y-4 text-sm font-light">
                          {customerInfoItems.map((item, index) =>
                            item.isBlock ? (
                              <div key={item.label}>
                                <label className="text-muted-foreground">
                                  {item.label}
                                </label>
                                <p className="text-foreground bg-background p-4 rounded-sm border border-border/20 text-xs italic mt-1.5">
                                  {item.value}
                                </p>
                              </div>
                            ) : (
                              <div
                                key={item.label}
                                className={`flex justify-between pb-2 ${
                                  index !== customerInfoItems.length - 1
                                    ? "border-b border-border/10"
                                    : ""
                                }`}
                              >
                                <label className="text-muted-foreground">
                                  {item.label}
                                </label>
                                <p className="font-semibold">{item.value}</p>
                              </div>
                            ),
                          )}
                        </div>
                      </div>
                    )}
                  </>
                )}

                {/* In Stock / Limited Edition / Made to Order / Pre-Order Flow */}
                {!isOutOfStock && (
                  <>
                    {/* Step 1: Product Config & Lead Notice */}
                    {step === 1 && (
                      <div className="space-y-6">
                        {/* Status Notice */}
                        {statusNotices[status] && (
                          <div
                            className={cn(
                              "p-4 border rounded-sm",
                              statusNotices[status].containerClass,
                            )}
                          >
                            <p
                              className={cn(
                                "text-[12px] font-light leading-relaxed",
                                statusNotices[status].textClass,
                              )}
                            >
                              {statusNotices[status].content}
                            </p>
                          </div>
                        )}

                        {/* Quantity */}
                        <div className="space-y-3">
                          <label className="text-xs font-mono font-semibold tracking-wider text-muted-foreground/60 uppercase inline-block">
                            Choose Quantity
                          </label>

                          <div className="flex items-center gap-4">
                            {/* Minus Button */}
                            <button
                              type="button"
                              onClick={() =>
                                setQuantity((q) => Math.max(1, q - 1))
                              }
                              disabled={quantity <= 1}
                              className="w-9 h-9 border border-border/40 hover:border-border rounded-full flex items-center justify-center transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                            >
                              <Minus className="size-4" />
                            </button>

                            {/* Display Quantity */}
                            <p className="text-xl font-heading font-bold w-6 text-center">
                              {quantity}
                            </p>

                            {/* Plus Button */}
                            <button
                              type="button"
                              onClick={() =>
                                setQuantity((q) =>
                                  furniture.stock && furniture.stock > 0
                                    ? Math.min(furniture.stock, q + 1)
                                    : q + 1,
                                )
                              }
                              disabled={
                                Boolean(
                                  furniture.stock && furniture.stock > 0,
                                ) && quantity >= furniture.stock
                              }
                              className="w-9 h-9 border border-border/40 hover:border-border rounded-full flex items-center justify-center transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                            >
                              <Plus className="size-4.5" />
                            </button>

                            {/* Max Quantity */}
                            {Boolean(
                              furniture.stock && furniture.stock > 0,
                            ) && (
                              <span className="text-xs font-mono text-muted-foreground ml-1.5">
                                Max: {furniture.stock}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Order Summary */}
                        <div className="bg-zinc-50 border border-border/20 rounded-sm p-5 space-y-3.5 text-sm">
                          <h3 className="text-xl font-semibold pb-2 border-b border-border/60 border-dashed">
                            Order Summary
                          </h3>

                          {/* Order Summary Items */}
                          {orderSummaryItems.map((item) => (
                            <div
                              key={item.label}
                              className={cn(
                                "flex justify-between items-center",
                                item.isTotal &&
                                  "text-base pt-2 border-t border-border/60 border-dashed",
                              )}
                            >
                              <label
                                className={cn(
                                  item.isTotal
                                    ? "font-semibold"
                                    : "text-muted-foreground",
                                )}
                              >
                                {item.label}
                              </label>
                              <p className="font-semibold">{item.value}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Step 2: Customer Contact Info */}
                    {step === 2 && (
                      <div className="space-y-6">
                        {/* Full Name */}
                        <Field invalid={!!errors.name}>
                          <FieldLabel htmlFor="name">Full Name</FieldLabel>
                          <FieldContent>
                            <Input
                              id="name"
                              value={customerInfo.name}
                              onChange={(e) =>
                                setCustomerInfo((prev) => ({
                                  ...prev,
                                  name: e.target.value,
                                }))
                              }
                              placeholder="e.g. John Doe"
                              className={inputClass}
                            />
                            {errors.name && (
                              <FieldError>{errors.name}</FieldError>
                            )}
                          </FieldContent>
                        </Field>

                        {/* Email Address */}
                        <Field invalid={!!errors.email}>
                          <FieldLabel htmlFor="email">Email Address</FieldLabel>
                          <FieldContent>
                            <Input
                              id="email"
                              type="email"
                              value={customerInfo.email}
                              onChange={(e) =>
                                setCustomerInfo((prev) => ({
                                  ...prev,
                                  email: e.target.value,
                                }))
                              }
                              placeholder="john@example.com"
                              className={inputClass}
                            />
                            {errors.email && (
                              <FieldError>{errors.email}</FieldError>
                            )}
                          </FieldContent>
                        </Field>

                        {/* Phone Number */}
                        <Field invalid={!!errors.phone}>
                          <FieldLabel htmlFor="phone">Phone Number</FieldLabel>
                          <FieldContent>
                            <Input
                              id="phone"
                              value={customerInfo.phone}
                              onChange={(e) =>
                                setCustomerInfo((prev) => ({
                                  ...prev,
                                  phone: e.target.value,
                                }))
                              }
                              placeholder="(+880) 100-0000"
                              className={inputClass}
                            />
                            {errors.phone && (
                              <FieldError>{errors.phone}</FieldError>
                            )}
                          </FieldContent>
                        </Field>
                      </div>
                    )}

                    {/* Step 3: Delivery Address */}
                    {step === 3 && (
                      <div className="space-y-5">
                        {/* Street Address */}
                        <Field invalid={!!errors.address}>
                          <FieldLabel htmlFor="address">
                            Street Address
                          </FieldLabel>
                          <FieldContent>
                            <Input
                              id="address"
                              value={deliveryInfo.address}
                              onChange={(e) =>
                                setDeliveryInfo((prev) => ({
                                  ...prev,
                                  address: e.target.value,
                                }))
                              }
                              placeholder="e.g. House-12, Road-3, Sector-1, Uttara"
                              className={inputClass}
                            />
                            {errors.address && (
                              <FieldError>{errors.address}</FieldError>
                            )}
                          </FieldContent>
                        </Field>

                        {/* City & Zip Code */}
                        <div className="grid grid-cols-2 gap-4">
                          <Field invalid={!!errors.city}>
                            <FieldLabel htmlFor="city">City</FieldLabel>
                            <FieldContent>
                              <Input
                                id="city"
                                value={deliveryInfo.city}
                                onChange={(e) =>
                                  setDeliveryInfo((prev) => ({
                                    ...prev,
                                    city: e.target.value,
                                  }))
                                }
                                placeholder="e.g. Dhaka"
                                className={inputClass}
                              />
                              {errors.city && (
                                <FieldError>{errors.city}</FieldError>
                              )}
                            </FieldContent>
                          </Field>

                          <Field invalid={!!errors.zip}>
                            <FieldLabel htmlFor="zip">
                              Postal / ZIP Code
                            </FieldLabel>
                            <FieldContent>
                              <Input
                                id="zip"
                                value={deliveryInfo.zip}
                                onChange={(e) =>
                                  setDeliveryInfo((prev) => ({
                                    ...prev,
                                    zip: e.target.value,
                                  }))
                                }
                                placeholder="e.g. 1230"
                                className={inputClass}
                              />
                              {errors.zip && (
                                <FieldError>{errors.zip}</FieldError>
                              )}
                            </FieldContent>
                          </Field>
                        </div>

                        {/* Delivery Instructions */}
                        <Field>
                          <FieldLabel htmlFor="notes">
                            Delivery Instructions (Optional)
                          </FieldLabel>
                          <FieldContent>
                            <Textarea
                              id="notes"
                              value={deliveryInfo.notes}
                              onChange={(e) =>
                                setDeliveryInfo((prev) => ({
                                  ...prev,
                                  notes: e.target.value,
                                }))
                              }
                              placeholder="Include details regarding floor height, freight elevator or dimensional revisions."
                              className={textareaClass}
                            />
                          </FieldContent>
                        </Field>
                      </div>
                    )}

                    {/* Step 4: Final Summary Review */}
                    {step === 4 && (
                      <div className="space-y-6">
                        <h3 className="text-lg font-semibold mb-3">
                          Final Review Summary
                        </h3>

                        {/* Final Review Summary Items */}
                        <div className="border border-border/20 rounded-sm p-5 bg-zinc-50 space-y-4 text-sm font-light">
                          {finalReviewSummaryItems.map((item, index) => (
                            <div
                              key={item.label}
                              className={`flex justify-between pb-2 ${
                                index !== finalReviewSummaryItems.length - 1
                                  ? "border-b border-border/10"
                                  : ""
                              }`}
                            >
                              <label className="text-muted-foreground">
                                {item.label}
                              </label>
                              <div className="text-right max-w-[60%]">
                                <p className="font-semibold">{item.value}</p>
                                {item.subValue && (
                                  <p className="text-xs text-muted-foreground font-normal lowercase">
                                    {item.subValue}
                                  </p>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="p-4 bg-zinc-100 rounded-sm">
                          <p className="text-[11px] font-light text-muted-foreground leading-normal">
                            Note: Submitting this form registers your order
                            request. No payment will be processed now. Our team
                            will review your order details and reach out soon to
                            finalize delivery and payment.
                          </p>
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
            )}
          </div>

          {/* Navigation Buttons (Pinned at Bottom) */}
          {!isSuccess && (
            <div className="p-7 bg-background border-t border-dashed border-border/25 shrink-0">
              <div className="flex items-center gap-3">
                {/* Back Button */}
                {step > 1 && (
                  <LiminalButton
                    type="button"
                    onClick={handlePrev}
                    variant="outline"
                    showIcon={false}
                  >
                    <ChevronLeft className="size-4 mr-1 inline-block" /> Back
                  </LiminalButton>
                )}

                {/* Continue Button / Submit Button */}
                {step < totalSteps ? (
                  <LiminalButton
                    type="button"
                    onClick={handleNext}
                    icon={ChevronRight}
                    animateIcon={false}
                    className="flex-1 ml-auto"
                  >
                    Continue
                  </LiminalButton>
                ) : (
                  <LiminalButton
                    type="button"
                    onClick={handleSubmit}
                    isLoading={isSubmitting}
                    className="flex-1"
                    showIcon={false}
                  >
                    {isOutOfStock ? "Submit Request" : "Place Order"}
                  </LiminalButton>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FurnitureOrderPanel;
