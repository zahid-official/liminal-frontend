"use client";

import LiminalButton from "@/components/shared/LiminalButton";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";
import { IFurniture } from "../furnitureData";
import { OrderPanelHeader } from "./orderPanel/OrderPanelHeader";
import { OrderPanelProductCard } from "./orderPanel/OrderPanelProductCard";
import { OrderStepIndicator } from "./orderPanel/OrderStepIndicator";
import { OrderSuccessState } from "./orderPanel/OrderSuccessState";
import { StepCustomerInfo } from "./orderPanel/StepCustomerInfo";
import { StepDeliveryInfo } from "./orderPanel/StepDeliveryInfo";
import { StepQuantitySummary } from "./orderPanel/StepQuantitySummary";
import { StepReviewSubmit } from "./orderPanel/StepReviewSubmit";
import { useFurnitureOrderForm } from "./orderPanel/useFurnitureOrderForm";

interface FurnitureOrderPanelProps {
  isOpen: boolean;
  onClose: () => void;
  furniture: IFurniture;
}

// FurnitureOrderPanel Component
const FurnitureOrderPanel = ({
  isOpen,
  onClose,
  furniture,
}: FurnitureOrderPanelProps) => {
  const { title, price, thumbnail, status } = furniture;

  // useFurnitureOrderForm hook
  const {
    step,
    quantity,
    setQuantity,
    customerInfo,
    setCustomerInfo,
    deliveryInfo,
    setDeliveryInfo,
    interestReason,
    setInterestReason,
    errors,
    isSubmitting,
    isSuccess,
    isMounted,
    isVisible,
    isOutOfStock,
    totalSteps,
    customerInfoItems,
    orderSummaryItems,
    finalReviewSummaryItems,
    handleNext,
    handlePrev,
    handleSubmit,
    handleClose,
  } = useFurnitureOrderForm(isOpen, onClose, furniture);

  if (!isMounted) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className={cn(
          "absolute inset-0 bg-foreground/20 backdrop-blur-xs transition-opacity duration-500 ease-in-out cursor-pointer",
          isVisible ? "opacity-100" : "opacity-0",
        )}
        onClick={handleClose}
      />

      {/* Slide-over Content Container */}
      <div className="absolute inset-y-0 right-0 pl-10 max-w-full flex">
        <div
          className={cn(
            "w-screen max-w-md sm:max-w-lg bg-background border-l border-border/20 shadow-2xl flex flex-col h-full relative z-10 transition-transform duration-500 ease-in-out",
            isVisible ? "translate-x-0" : "translate-x-full",
          )}
        >
          {/* Header */}
          {!isSuccess && (
            <OrderPanelHeader status={status} onClose={handleClose} />
          )}

          {/* Product Quick View Card */}
          {!isSuccess && (
            <OrderPanelProductCard
              thumbnail={thumbnail}
              title={title}
              status={status}
              price={price}
            />
          )}

          {/* Form Content Scrollable */}
          <div className="flex-1 overflow-y-auto px-6 py-8">
            {isSuccess ? (
              <OrderSuccessState
                isOutOfStock={isOutOfStock}
                onClose={handleClose}
              />
            ) : (
              <div className="space-y-6">
                {/* Step Indicator */}
                <OrderStepIndicator step={step} totalSteps={totalSteps} />

                {/* Form Steps */}
                {isOutOfStock ? (
                  <>
                    {step === 1 && (
                      <StepCustomerInfo
                        furniture={furniture}
                        isOutOfStock={isOutOfStock}
                        customerInfo={customerInfo}
                        setCustomerInfo={setCustomerInfo}
                        interestReason={interestReason}
                        setInterestReason={setInterestReason}
                        errors={errors}
                      />
                    )}
                    {step === 2 && (
                      <StepReviewSubmit
                        isOutOfStock={isOutOfStock}
                        summaryItems={customerInfoItems}
                      />
                    )}
                  </>
                ) : (
                  <>
                    {step === 1 && (
                      <StepQuantitySummary
                        furniture={furniture}
                        quantity={quantity}
                        setQuantity={setQuantity}
                        orderSummaryItems={orderSummaryItems}
                      />
                    )}
                    {step === 2 && (
                      <StepCustomerInfo
                        furniture={furniture}
                        isOutOfStock={isOutOfStock}
                        customerInfo={customerInfo}
                        setCustomerInfo={setCustomerInfo}
                        interestReason={interestReason}
                        setInterestReason={setInterestReason}
                        errors={errors}
                      />
                    )}
                    {step === 3 && (
                      <StepDeliveryInfo
                        deliveryInfo={deliveryInfo}
                        setDeliveryInfo={setDeliveryInfo}
                        errors={errors}
                      />
                    )}
                    {step === 4 && (
                      <StepReviewSubmit
                        isOutOfStock={isOutOfStock}
                        summaryItems={finalReviewSummaryItems}
                      />
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

                {/* Continue / Submit Button */}
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
