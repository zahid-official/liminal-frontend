"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, Minus, Plus, Check, ArrowRight, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { IFurniture, type FurnitureStatus } from "../furnitureData";
import LiminalButton from "@/components/shared/LiminalButton";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

// Order Request Interface - structured for future API integration
interface IOrderRequest {
  productId: string;
  productCode: string;
  productTitle: string;
  status: FurnitureStatus;
  price: string;
  quantity: number;
  customer: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };
  delivery: {
    address: string;
    city: string;
    postalCode: string;
    country: string;
    notes: string;
  };
}

// Step configuration by status
const getSteps = (status: FurnitureStatus) => {
  if (status === "Out of Stock") {
    return ["interest", "confirmation"] as const;
  }
  return ["product", "information", "delivery", "confirmation"] as const;
};

// Panel title by status
const panelTitles: Record<FurnitureStatus, string> = {
  "In Stock": "Complete Your Order",
  "Limited Edition": "Secure Your Piece",
  "Made to Order": "Commission This Piece",
  "Pre-Order": "Reserve Your Piece",
  "Out of Stock": "Register Interest",
};

// FurnitureOrderPanel Props
interface FurnitureOrderPanelProps {
  furniture: IFurniture;
  isOpen: boolean;
  onClose: () => void;
}

// FurnitureOrderPanel Component
const FurnitureOrderPanel = ({
  furniture,
  isOpen,
  onClose,
}: FurnitureOrderPanelProps) => {
  const steps = getSteps(furniture.status);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [orderRef, setOrderRef] = useState("");

  // Form state
  const [formData, setFormData] = useState<IOrderRequest>({
    productId: furniture.id,
    productCode: furniture.productCode,
    productTitle: furniture.title,
    status: furniture.status,
    price: furniture.price,
    quantity: 1,
    customer: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    },
    delivery: {
      address: "",
      city: "",
      postalCode: "",
      country: "",
      notes: "",
    },
  });

  const currentStep = steps[currentStepIndex];
  const isLastStep = currentStepIndex === steps.length - 1;
  const isFirstStep = currentStepIndex === 0;

  // Reset panel state when closed
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setCurrentStepIndex(0);
        setIsSubmitted(false);
        setQuantity(1);
        setOrderRef("");
      }, 300);
    }
  }, [isOpen]);

  // Lock body scroll when panel is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Update form field
  const updateCustomer = useCallback(
    (field: keyof IOrderRequest["customer"], value: string) => {
      setFormData((prev) => ({
        ...prev,
        customer: { ...prev.customer, [field]: value },
      }));
    },
    [],
  );

  const updateDelivery = useCallback(
    (field: keyof IOrderRequest["delivery"], value: string) => {
      setFormData((prev) => ({
        ...prev,
        delivery: { ...prev.delivery, [field]: value },
      }));
    },
    [],
  );

  // Handle quantity
  const maxQuantity =
    furniture.status === "In Stock" || furniture.status === "Limited Edition"
      ? furniture.stock
      : 1;

  const handleQuantityChange = (delta: number) => {
    const newQty = Math.max(1, Math.min(maxQuantity, quantity + delta));
    setQuantity(newQty);
    setFormData((prev) => ({ ...prev, quantity: newQty }));
  };

  // Handle next step
  const handleNext = () => {
    if (isLastStep && !isSubmitted) {
      // Mock submission
      const ref = `LMN-${Date.now().toString(36).toUpperCase()}`;
      setOrderRef(ref);
      setIsSubmitted(true);
      console.log("Order submitted:", { ...formData, orderRef: ref });
      return;
    }
    if (!isLastStep) {
      setCurrentStepIndex((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (!isFirstStep) {
      setCurrentStepIndex((prev) => prev - 1);
    }
  };

  // Validate current step
  const isCurrentStepValid = () => {
    switch (currentStep) {
      case "product":
        return quantity >= 1;
      case "information":
      case "interest":
        return (
          formData.customer.firstName.trim() !== "" &&
          formData.customer.email.trim() !== ""
        );
      case "delivery":
        return formData.delivery.address.trim() !== "";
      case "confirmation":
        return true;
      default:
        return true;
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-foreground/40 backdrop-blur-sm transition-opacity duration-500",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
        onClick={onClose}
      />

      {/* Panel */}
      <div
        className={cn(
          "fixed top-0 right-0 z-50 h-full w-full sm:w-120 bg-background shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] flex flex-col",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        {/* Panel Header */}
        <div className="shrink-0 p-6 border-b border-border/30">
          <div className="flex items-center justify-between mb-4">
            <h3
              className="text-lg font-bold font-heading tracking-tight text-foreground"
            >
              {panelTitles[furniture.status]}
            </h3>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full border border-border/60 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all duration-300 cursor-pointer"
            >
              <X className="size-4" />
            </button>
          </div>

          {/* Product Summary */}
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 rounded-sm overflow-hidden border border-border/20 shrink-0">
              <Image
                src={furniture.thumbnail}
                alt={furniture.title}
                fill
                sizes="64px"
                className="object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-bold font-heading tracking-tight truncate">
                {furniture.title}
              </h3>
              <p className="text-xs text-muted-foreground">
                {furniture.specifications.materials}
              </p>
              <p className="text-sm font-bold text-liminal-secondary mt-0.5">
                {furniture.price}
              </p>
            </div>
          </div>

          {/* Step Indicator */}
          {!isSubmitted && (
            <div className="flex items-center gap-2 mt-5">
              {steps.map((step, index) => (
                <div key={step} className="flex items-center gap-2 flex-1">
                  <div
                    className={cn(
                      "h-1 flex-1 rounded-full transition-colors duration-500",
                      index <= currentStepIndex
                        ? "bg-liminal-secondary"
                        : "bg-border/40",
                    )}
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Panel Body */}
        <div className="flex-1 overflow-y-auto p-6">
          {isSubmitted ? (
            // Success State
            <div className="flex flex-col items-center justify-center h-full text-center space-y-6 py-8">
              <div className="w-16 h-16 rounded-full bg-liminal-secondary/10 border border-liminal-secondary/30 flex items-center justify-center">
                <Check className="size-7 text-liminal-secondary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold font-heading">
                  {furniture.status === "Out of Stock"
                    ? "Interest Registered"
                    : "Order Received"}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                  {furniture.status === "Out of Stock"
                    ? "We will notify you when this piece becomes available. Thank you for your interest."
                    : "Our team will review your order and reach out shortly with confirmation and next steps."}
                </p>
              </div>
              <div className="p-4 bg-zinc-50 border border-border/30 rounded-sm w-full max-w-xs">
                <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-[0.2em] block mb-1">
                  Reference
                </span>
                <span className="text-sm font-bold font-mono tracking-wider">
                  {orderRef}
                </span>
              </div>
              <LiminalButton
                variant="outline"
                onClick={onClose}
                showIcon={false}
              >
                Close
              </LiminalButton>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Step: Product */}
              {currentStep === "product" && (
                <>
                  <div className="space-y-2">
                    <h4 className="text-lg font-bold font-heading">
                      Product Details
                    </h4>
                    <p className="text-sm text-muted-foreground font-light">
                      Review and confirm the product configuration for your
                      order.
                    </p>
                  </div>

                  {/* Status Notice */}
                  {furniture.status === "Limited Edition" && (
                    <div className="p-4 bg-amber-50 border border-amber-200/50 rounded-sm">
                      <p className="text-xs font-semibold text-amber-800">
                        Limited Edition - Only {furniture.stock} pieces
                        remaining
                      </p>
                    </div>
                  )}
                  {furniture.status === "Made to Order" && (
                    <div className="p-4 bg-sky-50 border border-sky-200/50 rounded-sm">
                      <p className="text-xs font-semibold text-sky-800">
                        Made to Order - Estimated lead time:{" "}
                        {furniture.specifications.leadTime}
                      </p>
                    </div>
                  )}
                  {furniture.status === "Pre-Order" && (
                    <div className="p-4 bg-violet-50 border border-violet-200/50 rounded-sm">
                      <p className="text-xs font-semibold text-violet-800">
                        Pre-Order - Expected availability:{" "}
                        {furniture.specifications.leadTime}
                      </p>
                    </div>
                  )}

                  {/* Quantity Selector */}
                  {(furniture.status === "In Stock" ||
                    furniture.status === "Limited Edition") && (
                    <div className="space-y-3">
                      <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                        Quantity
                      </Label>
                      <div className="flex items-center gap-4">
                        <button
                          onClick={() => handleQuantityChange(-1)}
                          disabled={quantity <= 1}
                          className="w-10 h-10 rounded-sm border border-border/60 flex items-center justify-center hover:border-liminal-secondary/40 transition-colors disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                        >
                          <Minus className="size-4" />
                        </button>
                        <span className="text-lg font-bold font-heading w-12 text-center">
                          {quantity}
                        </span>
                        <button
                          onClick={() => handleQuantityChange(1)}
                          disabled={quantity >= maxQuantity}
                          className="w-10 h-10 rounded-sm border border-border/60 flex items-center justify-center hover:border-liminal-secondary/40 transition-colors disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                        >
                          <Plus className="size-4" />
                        </button>
                        <span className="text-xs text-muted-foreground font-mono">
                          Max: {maxQuantity}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Order Summary Line */}
                  <div className="pt-4 border-t border-border/30 space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                        Product
                      </span>
                      <span className="text-sm font-semibold">
                        {furniture.title}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                        Unit Price
                      </span>
                      <span className="text-sm font-semibold">
                        {furniture.price}
                      </span>
                    </div>
                    {(furniture.status === "In Stock" ||
                      furniture.status === "Limited Edition") && (
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                          Quantity
                        </span>
                        <span className="text-sm font-semibold">
                          {quantity}
                        </span>
                      </div>
                    )}
                  </div>
                </>
              )}

              {/* Step: Information */}
              {(currentStep === "information" ||
                currentStep === "interest") && (
                <>
                  <div className="space-y-2">
                    <h4 className="text-lg font-bold font-heading">
                      {furniture.status === "Out of Stock"
                        ? "Your Information"
                        : "Customer Information"}
                    </h4>
                    <p className="text-sm text-muted-foreground font-light">
                      {furniture.status === "Out of Stock"
                        ? "Share your details and we will notify you when this piece becomes available."
                        : "Please provide your contact details so our team can process your order."}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label
                          htmlFor="firstName"
                          className="text-xs font-bold uppercase tracking-widest text-muted-foreground"
                        >
                          First Name *
                        </Label>
                        <Input
                          id="firstName"
                          placeholder="First name"
                          value={formData.customer.firstName}
                          onChange={(e) =>
                            updateCustomer("firstName", e.target.value)
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor="lastName"
                          className="text-xs font-bold uppercase tracking-widest text-muted-foreground"
                        >
                          Last Name
                        </Label>
                        <Input
                          id="lastName"
                          placeholder="Last name"
                          value={formData.customer.lastName}
                          onChange={(e) =>
                            updateCustomer("lastName", e.target.value)
                          }
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="email"
                        className="text-xs font-bold uppercase tracking-widest text-muted-foreground"
                      >
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.customer.email}
                        onChange={(e) =>
                          updateCustomer("email", e.target.value)
                        }
                      />
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="phone"
                        className="text-xs font-bold uppercase tracking-widest text-muted-foreground"
                      >
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+880 1XXX XXXXXX"
                        value={formData.customer.phone}
                        onChange={(e) =>
                          updateCustomer("phone", e.target.value)
                        }
                      />
                    </div>
                  </div>
                </>
              )}

              {/* Step: Delivery */}
              {currentStep === "delivery" && (
                <>
                  <div className="space-y-2">
                    <h4 className="text-lg font-bold font-heading">
                      Delivery Details
                    </h4>
                    <p className="text-sm text-muted-foreground font-light">
                      Provide your delivery address. Our team will confirm
                      delivery options and timing.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label
                        htmlFor="address"
                        className="text-xs font-bold uppercase tracking-widest text-muted-foreground"
                      >
                        Street Address *
                      </Label>
                      <Input
                        id="address"
                        placeholder="Street address"
                        value={formData.delivery.address}
                        onChange={(e) =>
                          updateDelivery("address", e.target.value)
                        }
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label
                          htmlFor="city"
                          className="text-xs font-bold uppercase tracking-widest text-muted-foreground"
                        >
                          City
                        </Label>
                        <Input
                          id="city"
                          placeholder="City"
                          value={formData.delivery.city}
                          onChange={(e) =>
                            updateDelivery("city", e.target.value)
                          }
                        />
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor="postalCode"
                          className="text-xs font-bold uppercase tracking-widest text-muted-foreground"
                        >
                          Postal Code
                        </Label>
                        <Input
                          id="postalCode"
                          placeholder="Postal code"
                          value={formData.delivery.postalCode}
                          onChange={(e) =>
                            updateDelivery("postalCode", e.target.value)
                          }
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="country"
                        className="text-xs font-bold uppercase tracking-widest text-muted-foreground"
                      >
                        Country
                      </Label>
                      <Input
                        id="country"
                        placeholder="Country"
                        value={formData.delivery.country}
                        onChange={(e) =>
                          updateDelivery("country", e.target.value)
                        }
                      />
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="notes"
                        className="text-xs font-bold uppercase tracking-widest text-muted-foreground"
                      >
                        Delivery Notes
                      </Label>
                      <Textarea
                        id="notes"
                        placeholder="Any special delivery instructions..."
                        rows={3}
                        value={formData.delivery.notes}
                        onChange={(e) =>
                          updateDelivery("notes", e.target.value)
                        }
                      />
                    </div>
                  </div>
                </>
              )}

              {/* Step: Confirmation */}
              {currentStep === "confirmation" && !isSubmitted && (
                <>
                  <div className="space-y-2">
                    <h4 className="text-lg font-bold font-heading">
                      Review Your Order
                    </h4>
                    <p className="text-sm text-muted-foreground font-light">
                      Please review the details below before submitting your
                      order.
                    </p>
                  </div>

                  {/* Order Summary */}
                  <div className="space-y-4 p-5 bg-zinc-50 border border-border/30 rounded-sm">
                    <div className="flex justify-between items-center pb-3 border-b border-border/30">
                      <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-[0.2em]">
                        Product
                      </span>
                      <span className="text-sm font-semibold">
                        {furniture.title}
                      </span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-border/30">
                      <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-[0.2em]">
                        Price
                      </span>
                      <span className="text-sm font-semibold">
                        {furniture.price}
                      </span>
                    </div>
                    {(furniture.status === "In Stock" ||
                      furniture.status === "Limited Edition") && (
                      <div className="flex justify-between items-center pb-3 border-b border-border/30">
                        <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-[0.2em]">
                          Quantity
                        </span>
                        <span className="text-sm font-semibold">
                          {quantity}
                        </span>
                      </div>
                    )}
                    <div className="flex justify-between items-center pb-3 border-b border-border/30">
                      <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-[0.2em]">
                        Customer
                      </span>
                      <span className="text-sm font-semibold text-right">
                        {formData.customer.firstName}{" "}
                        {formData.customer.lastName}
                      </span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-border/30">
                      <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-[0.2em]">
                        Email
                      </span>
                      <span className="text-sm font-semibold text-right truncate max-w-50">
                        {formData.customer.email}
                      </span>
                    </div>
                    {formData.delivery.address && (
                      <div className="flex justify-between items-start">
                        <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-[0.2em] pt-0.5">
                          Delivery
                        </span>
                        <span className="text-sm font-semibold text-right max-w-50">
                          {formData.delivery.address}
                          {formData.delivery.city &&
                            `, ${formData.delivery.city}`}
                        </span>
                      </div>
                    )}
                  </div>

                  <p className="text-xs text-muted-foreground/60 leading-relaxed">
                    By submitting, you agree to be contacted by our team
                    regarding your order. Payment details will be arranged
                    separately upon order confirmation.
                  </p>
                </>
              )}
            </div>
          )}
        </div>

        {/* Panel Footer */}
        {!isSubmitted && (
          <div className="shrink-0 p-6 border-t border-border/30 space-y-3">
            <div className="flex items-center gap-3">
              {/* Back Button */}
              {!isFirstStep && (
                <button
                  onClick={handleBack}
                  className="w-10 h-10 rounded-full border border-border/60 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all duration-300 cursor-pointer shrink-0"
                >
                  <ArrowLeft className="size-4" />
                </button>
              )}

              {/* Next / Submit Button */}
              <LiminalButton
                className="flex-1"
                icon={isLastStep ? Check : ArrowRight}
                animateIcon={false}
                onClick={handleNext}
                disabled={!isCurrentStepValid()}
              >
                {isLastStep ? "Submit Order" : "Continue"}
              </LiminalButton>
            </div>

            {/* Step Label */}
            <p className="text-center text-[10px] font-mono text-muted-foreground/40 uppercase tracking-[0.2em]">
              Step {currentStepIndex + 1} of {steps.length}
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default FurnitureOrderPanel;
