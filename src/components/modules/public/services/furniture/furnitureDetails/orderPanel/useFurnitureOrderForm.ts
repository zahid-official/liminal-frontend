import React, { useEffect, useState } from "react";
import { CustomerInfo, DeliveryInfo, FormErrors, SummaryItem } from "./types";
import { IFurniture } from "../../furnitureData";

export const useFurnitureOrderForm = (
  isOpen: boolean,
  onClose: () => void,
  furniture: IFurniture,
) => {
  const { title, price, status } = furniture;

  // Form State
  const [step, setStep] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({
    name: "",
    email: "",
    phone: "",
  });
  const [deliveryInfo, setDeliveryInfo] = useState<DeliveryInfo>({
    address: "",
    city: "",
    zip: "",
    notes: "",
  });
  const [interestReason, setInterestReason] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Mounted and animated state for smooth slide in & out
  const [isMounted, setIsMounted] = useState(isOpen);
  const [isVisible, setIsVisible] = useState(false);

  // Helper to check if status is Out of Stock
  const isOutOfStock = status === "Out of Stock";

  // Total Steps count
  const totalSteps = isOutOfStock ? 2 : 4;

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

  // Customer Info Items (for Out of Stock Review step)
  const customerInfoItems: SummaryItem[] = [
    { label: "Name", value: customerInfo.name },
    { label: "Email", value: customerInfo.email },
    { label: "Interest Reason", value: interestReason, isBlock: true },
  ];

  // Order Summary Items (for Step 1 Quantity step)
  const orderSummaryItems: SummaryItem[] = [
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

  // Final Review Summary Items (for Step 4 Review step)
  const finalReviewSummaryItems: SummaryItem[] = [
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

  // Validation
  const validateStep = (currentStep: number) => {
    const newErrors: FormErrors = {};

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

  // Mount/Unmount animation effect
  useEffect(() => {
    let animationFrameId1: number;
    let animationFrameId2: number;
    let unmountTimer: NodeJS.Timeout;

    if (isOpen) {
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

  const handleClose = () => {
    onClose();
  };

  return {
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
  };
};
