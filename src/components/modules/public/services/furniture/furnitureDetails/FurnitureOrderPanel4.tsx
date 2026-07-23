"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Check } from "lucide-react";
import { IFurniture } from "../furnitureData";
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

  const isOutOfStock = status === "Out of Stock";
  const totalSteps = isOutOfStock ? 2 : 5;

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
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const handleClose = () => {
    onClose();
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

  // Underline Input class style (blueprint dark variant)
  const inputClass = "w-full bg-transparent border-b border-zinc-800 focus:border-liminal-secondary focus:outline-none py-2 text-sm font-light text-zinc-100 transition-all duration-300 rounded-none h-10 border-t-0 border-x-0";
  const textareaClass = "w-full bg-transparent border-b border-zinc-800 focus:border-liminal-secondary focus:outline-none py-2 text-sm font-light text-zinc-100 transition-all duration-300 rounded-none min-h-20 border-t-0 border-x-0 resize-none";

  return (
    <div className="fixed inset-0 z-50 overflow-hidden dark text-zinc-100">
      {/* Dark backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-500 cursor-pointer animate-in fade-in"
        onClick={handleClose}
      />

      {/* Slide-over Container */}
      <div className="absolute inset-y-0 right-0 pl-10 max-w-full flex">
        <div className="w-screen max-w-md sm:max-w-lg bg-zinc-950 border-l border-zinc-900 shadow-2xl flex flex-col h-full relative z-10 animate-in slide-in-from-right duration-500 ease-out">
          
          {/* Header */}
          <div className="px-6 py-6 border-b border-zinc-900 flex items-center justify-between">
            <div>
              <span className="text-[9px] font-mono tracking-widest text-liminal-secondary uppercase font-bold block mb-1">
                EXHIBITION REGISTRY
              </span>
              <h2 className="text-lg font-bold font-heading tracking-tight text-zinc-100 uppercase">
                {isOutOfStock ? "Register Interest" : "Confirm Commission"}
              </h2>
            </div>
            <button
              onClick={handleClose}
              className="p-2 rounded-full hover:bg-zinc-900 text-zinc-400 hover:text-zinc-100 cursor-pointer transition-colors"
              aria-label="Close panel"
            >
              <X className="size-5" />
            </button>
          </div>

          {/* Product Header quick-view */}
          <div className="px-6 py-4 bg-zinc-900 border-b border-zinc-900/50 flex gap-4 items-center">
            <div className="relative size-14 bg-zinc-950 rounded-xs border border-zinc-800 overflow-hidden shrink-0">
              <Image src={thumbnail} alt={title} fill className="object-cover" />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="font-heading font-bold text-base truncate uppercase text-zinc-100">{title}</h3>
              <p className="text-[10px] text-zinc-400 font-mono tracking-wider uppercase mt-0.5">
                STATUS: {status}
              </p>
            </div>
            <div className="text-right">
              <span className="text-base font-bold text-liminal-secondary block font-heading">
                {price}
              </span>
              <span className="text-[9px] text-zinc-500 font-mono tracking-widest uppercase block mt-0.5">
                MSRP
              </span>
            </div>
          </div>

          {/* Form Scrollable Area */}
          <div className="flex-1 overflow-y-auto px-6 py-8">
            {isSuccess ? (
              <div className="flex flex-col items-center justify-center text-center h-full py-10 space-y-6">
                <div className="size-14 rounded-full bg-zinc-900 border border-zinc-850 flex items-center justify-center text-emerald-500">
                  <Check className="size-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold font-heading uppercase tracking-wide text-zinc-100">
                    {isOutOfStock ? "Interest Logged" : "Request Cataloged"}
                  </h3>
                  <p className="text-sm text-zinc-400 font-light max-w-sm leading-relaxed">
                    {isOutOfStock
                      ? "Thank you for registering. Our collection management team will notify you immediately of potential cancellations or updates regarding this piece."
                      : "We have cataloged your commission request. Our atelier director will reach out within 24 hours to align on logistics and customization choices."}
                  </p>
                </div>
                <div className="pt-4">
                  <LiminalButton onClick={handleClose} variant="outline" className="border-zinc-800 text-zinc-300 hover:bg-zinc-900" showIcon={false}>
                    Return to Exhibition
                  </LiminalButton>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Step indicator */}
                <div className="flex items-center justify-between text-[10px] font-mono tracking-widest text-zinc-500 mb-6 uppercase">
                  <span>METRIC {step} OF {totalSteps}</span>
                  <div className="flex gap-1.5">
                    {Array.from({ length: totalSteps }).map((_, i) => (
                      <div
                        key={i}
                        className={`h-0.5 w-6 rounded-full transition-all duration-300 ${
                          step >= i + 1 ? "bg-liminal-secondary" : "bg-zinc-800"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* OUT OF STOCK FLOW */}
                {isOutOfStock && (
                  <>
                    {step === 1 && (
                      <div className="space-y-6">
                        <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-xs">
                          <p className="text-[11px] font-light text-zinc-400 leading-relaxed">
                            This design is currently out of stock. Join the prioritized private collector waitlist below to receive notifications on allocation cancelations or upcoming collection drops.
                          </p>
                        </div>

                        <Field invalid={!!errors.name}>
                          <FieldLabel htmlFor="name" className="text-zinc-400">Full Name</FieldLabel>
                          <FieldContent>
                            <input
                              id="name"
                              value={customerInfo.name}
                              onChange={(e) =>
                                setCustomerInfo((prev) => ({ ...prev, name: e.target.value }))
                              }
                              placeholder="Name"
                              className={inputClass}
                            />
                            {errors.name && <FieldError className="text-rose-400">{errors.name}</FieldError>}
                          </FieldContent>
                        </Field>

                        <Field invalid={!!errors.email}>
                          <FieldLabel htmlFor="email" className="text-zinc-400">Email Address</FieldLabel>
                          <FieldContent>
                            <input
                              id="email"
                              type="email"
                              value={customerInfo.email}
                              onChange={(e) =>
                                setCustomerInfo((prev) => ({ ...prev, email: e.target.value }))
                              }
                              placeholder="Email Address"
                              className={inputClass}
                            />
                            {errors.email && <FieldError className="text-rose-400">{errors.email}</FieldError>}
                          </FieldContent>
                        </Field>

                        <Field invalid={!!errors.interestReason}>
                          <FieldLabel htmlFor="reason" className="text-zinc-400">Describe your collection interest</FieldLabel>
                          <FieldContent>
                            <textarea
                              id="reason"
                              value={interestReason}
                              onChange={(e) => setInterestReason(e.target.value)}
                              placeholder="Describe your design interest..."
                              className={textareaClass}
                            />
                            {errors.interestReason && (
                              <FieldError className="text-rose-400">{errors.interestReason}</FieldError>
                            )}
                          </FieldContent>
                        </Field>
                      </div>
                    )}

                    {step === 2 && (
                      <div className="space-y-6">
                        <h4 className="text-[10px] font-mono tracking-widest uppercase text-zinc-500 mb-4">
                          Log Verification
                        </h4>
                        <div className="border border-zinc-900 rounded-xs p-5 bg-zinc-900/50 space-y-4 text-sm font-light">
                          <div className="flex justify-between border-b border-zinc-900 pb-2.5">
                            <span className="text-zinc-500">DESIGN REFERENCE</span>
                            <span className="font-semibold text-zinc-100 uppercase">{title}</span>
                          </div>
                          <div className="flex justify-between border-b border-zinc-900 pb-2.5">
                            <span className="text-zinc-500">COLLECTOR NAME</span>
                            <span className="font-semibold text-zinc-100">{customerInfo.name}</span>
                          </div>
                          <div className="flex justify-between border-b border-zinc-900 pb-2.5">
                            <span className="text-zinc-500">EMAIL DESTINATION</span>
                            <span className="font-semibold text-zinc-100">{customerInfo.email}</span>
                          </div>
                          <div className="flex flex-col gap-1.5">
                            <span className="text-zinc-500">NOTES LOG</span>
                            <p className="text-zinc-300 bg-zinc-950 p-3 rounded-xs border border-zinc-900 text-xs italic">
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
                    {/* Step 1: Configuration */}
                    {step === 1 && (
                      <div className="space-y-6">
                        {status === "Made to Order" && (
                          <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-xs">
                            <p className="text-[11px] font-light text-zinc-400 leading-relaxed">
                              This piece is made to order in our primary atelier. Handcrafting requires a duration of approximately <strong>{specifications.leadTime}</strong>.
                            </p>
                          </div>
                        )}

                        {status === "Pre-Order" && (
                          <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-xs">
                            <p className="text-[11px] font-light text-zinc-400 leading-relaxed">
                              This item is in production. Estimated shipping allocations start within <strong>{specifications.leadTime}</strong>.
                            </p>
                          </div>
                        )}

                        <div className="space-y-4">
                          <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-500 block">
                            Configure Allocation Count
                          </label>
                          <div className="flex items-center gap-4">
                            <button
                              type="button"
                              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                              className="size-10 border border-zinc-800 hover:border-zinc-500 rounded-full flex items-center justify-center font-bold text-sm text-zinc-300 hover:text-zinc-100 cursor-pointer transition-colors"
                            >
                              -
                            </button>
                            <span className="text-lg font-heading font-bold w-6 text-center text-zinc-100">{quantity}</span>
                            <button
                              type="button"
                              onClick={() =>
                                setQuantity((q) =>
                                  status === "Limited Edition" ? Math.min(furniture.stock, q + 1) : q + 1
                                )
                              }
                              className="size-10 border border-zinc-800 hover:border-zinc-500 rounded-full flex items-center justify-center font-bold text-sm text-zinc-300 hover:text-zinc-100 cursor-pointer transition-colors"
                            >
                              +
                            </button>
                          </div>
                        </div>

                        <div className="bg-zinc-900/50 border border-zinc-900 rounded-xs p-5 space-y-3.5">
                          <div className="flex justify-between items-center text-sm">
                            <span className="text-zinc-500 font-light">VALUATION VALUE</span>
                            <span className="font-bold text-zinc-100 font-heading text-lg">{totalPriceFormatted}</span>
                          </div>
                          <div className="flex justify-between items-center text-[10px] font-mono border-t border-zinc-900 pt-3">
                            <span className="text-zinc-500 uppercase">LOGISTICS TAX</span>
                            <span className="text-zinc-300 uppercase">CALCULATED IN NEXT SECTION</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Step 2: Collector contact info */}
                    {step === 2 && (
                      <div className="space-y-5">
                        <Field invalid={!!errors.name}>
                          <FieldLabel htmlFor="name" className="text-zinc-400">Full Name</FieldLabel>
                          <FieldContent>
                            <input
                              id="name"
                              value={customerInfo.name}
                              onChange={(e) =>
                                setCustomerInfo((prev) => ({ ...prev, name: e.target.value }))
                              }
                              placeholder="Name"
                              className={inputClass}
                            />
                            {errors.name && <FieldError className="text-rose-400">{errors.name}</FieldError>}
                          </FieldContent>
                        </Field>

                        <Field invalid={!!errors.email}>
                          <FieldLabel htmlFor="email" className="text-zinc-400">Email Address</FieldLabel>
                          <FieldContent>
                            <input
                              id="email"
                              type="email"
                              value={customerInfo.email}
                              onChange={(e) =>
                                setCustomerInfo((prev) => ({ ...prev, email: e.target.value }))
                              }
                              placeholder="Email Address"
                              className={inputClass}
                            />
                            {errors.email && <FieldError className="text-rose-400">{errors.email}</FieldError>}
                          </FieldContent>
                        </Field>

                        <Field invalid={!!errors.phone}>
                          <FieldLabel htmlFor="phone" className="text-zinc-400">Phone Number</FieldLabel>
                          <FieldContent>
                            <input
                              id="phone"
                              value={customerInfo.phone}
                              onChange={(e) =>
                                setCustomerInfo((prev) => ({ ...prev, phone: e.target.value }))
                              }
                              placeholder="Phone Number"
                              className={inputClass}
                            />
                            {errors.phone && <FieldError className="text-rose-400">{errors.phone}</FieldError>}
                          </FieldContent>
                        </Field>
                      </div>
                    )}

                    {/* Step 3: Destination details */}
                    {step === 3 && (
                      <div className="space-y-5">
                        <Field invalid={!!errors.address}>
                          <FieldLabel htmlFor="address" className="text-zinc-400">Destination Address</FieldLabel>
                          <FieldContent>
                            <input
                              id="address"
                              value={deliveryInfo.address}
                              onChange={(e) =>
                                setDeliveryInfo((prev) => ({ ...prev, address: e.target.value }))
                              }
                              placeholder="Street Address"
                              className={inputClass}
                            />
                            {errors.address && <FieldError className="text-rose-400">{errors.address}</FieldError>}
                          </FieldContent>
                        </Field>

                        <div className="grid grid-cols-2 gap-4">
                          <Field invalid={!!errors.city}>
                            <FieldLabel htmlFor="city" className="text-zinc-400">City</FieldLabel>
                            <FieldContent>
                              <input
                                id="city"
                                value={deliveryInfo.city}
                                onChange={(e) =>
                                  setDeliveryInfo((prev) => ({ ...prev, city: e.target.value }))
                                }
                                placeholder="City"
                                className={inputClass}
                              />
                              {errors.city && <FieldError className="text-rose-400">{errors.city}</FieldError>}
                            </FieldContent>
                          </Field>

                          <Field invalid={!!errors.zip}>
                            <FieldLabel htmlFor="zip" className="text-zinc-400">ZIP / Postal Code</FieldLabel>
                            <FieldContent>
                              <input
                                id="zip"
                                value={deliveryInfo.zip}
                                onChange={(e) =>
                                  setDeliveryInfo((prev) => ({ ...prev, zip: e.target.value }))
                                }
                                placeholder="ZIP"
                                className={inputClass}
                              />
                              {errors.zip && <FieldError className="text-rose-400">{errors.zip}</FieldError>}
                            </FieldContent>
                          </Field>
                        </div>

                        <Field>
                          <FieldLabel htmlFor="notes" className="text-zinc-400">Customization Requirements (Optional)</FieldLabel>
                          <FieldContent>
                            <textarea
                              id="notes"
                              value={deliveryInfo.notes}
                              onChange={(e) =>
                                setDeliveryInfo((prev) => ({ ...prev, notes: e.target.value }))
                              }
                              placeholder="Customization notes..."
                              className={textareaClass}
                            />
                          </FieldContent>
                        </Field>
                      </div>
                    )}

                    {/* Step 4: Final review summary */}
                    {step === 4 && (
                      <div className="space-y-6">
                        <h4 className="text-[10px] font-mono tracking-widest uppercase text-zinc-500 mb-4">
                          Configuration Registry Review
                        </h4>

                        <div className="border border-zinc-900 rounded-xs p-5 bg-zinc-900/50 space-y-4 text-sm font-light">
                          <div className="flex justify-between border-b border-zinc-900 pb-2">
                            <span className="text-zinc-500">REFERENCE</span>
                            <span className="font-semibold text-zinc-100 uppercase truncate max-w-[200px]">
                              {title}
                            </span>
                          </div>

                          <div className="flex justify-between border-b border-zinc-900 pb-2">
                            <span className="text-zinc-500">ALLOCATION</span>
                            <span className="font-semibold text-zinc-100 font-mono">{quantity} UNITS</span>
                          </div>

                          <div className="flex justify-between border-b border-zinc-900 pb-2">
                            <span className="text-zinc-500">VALUATION</span>
                            <span className="font-bold text-liminal-secondary font-heading text-base">
                              {totalPriceFormatted}
                            </span>
                          </div>

                          <div className="flex justify-between border-b border-zinc-900 pb-2">
                            <span className="text-zinc-500">COLLECTOR</span>
                            <span className="font-semibold text-zinc-100 text-right">
                              {customerInfo.name} <br />
                              <span className="text-xs text-zinc-400 font-mono lowercase">
                                {customerInfo.email}
                              </span>
                            </span>
                          </div>

                          <div className="flex flex-col gap-1">
                            <span className="text-zinc-500">DESTINATION</span>
                            <p className="font-semibold text-zinc-100">
                              {deliveryInfo.address}, {deliveryInfo.city} ({deliveryInfo.zip})
                            </p>
                          </div>

                          {deliveryInfo.notes.trim() && (
                            <div className="flex flex-col gap-1">
                              <span className="text-zinc-500">CUSTOM LOGS</span>
                              <p className="text-zinc-300 p-3 rounded-xs bg-zinc-950 border border-zinc-900 text-xs italic">
                                {deliveryInfo.notes}
                              </p>
                            </div>
                          )}
                        </div>

                        <div className="p-4 bg-zinc-900 rounded-xs">
                          <p className="text-[10px] font-light text-zinc-500 leading-normal">
                            Commission placement logs allocation placeholder values. Our collection representative will contact you directly to confirm transport coordinates, trades discount alignment, and invoice templates.
                          </p>
                        </div>
                      </div>
                    )}
                  </>
                )}

                {/* Navigation Buttons Row */}
                <div className="flex items-center gap-4 pt-6 border-t border-zinc-900">
                  {step > 1 && (
                    <button
                      type="button"
                      onClick={handlePrev}
                      className="h-12 px-6 border border-zinc-800 hover:bg-zinc-900 text-zinc-300 hover:text-zinc-100 rounded-full flex items-center justify-center gap-2 cursor-pointer text-sm font-semibold transition-all duration-300"
                    >
                      <ChevronLeft className="size-4" /> Back
                    </button>
                  )}

                  {step < totalSteps ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="flex-1 h-12 bg-zinc-100 text-zinc-950 hover:bg-zinc-200 rounded-full flex items-center justify-center gap-2 cursor-pointer text-sm font-semibold transition-all duration-300 ml-auto"
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
                      {isOutOfStock ? "Register Interest" : "Confirm Commission"}
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
