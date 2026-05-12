"use client";

import LiminalButton from "@/components/shared/LiminalButton";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "@/components/ui/input-otp";
import { CheckCircle2, RefreshCw } from "lucide-react";
import { useState } from "react";

// VerifyForm Component
const VerifyForm = () => {
  const [isVerified, setIsVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [otp, setOtp] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length !== 6) return;
    
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    setIsVerified(true);
  };

  if (isVerified) {
    return (
      <div className="flex flex-col items-center justify-center space-y-6 text-center animate-in fade-in zoom-in-95 duration-700 transform-[translateZ(0)] will-change-[opacity,transform]">
        <div className="relative">
          <div className="absolute inset-0 animate-ping rounded-full bg-liminal-secondary/20 duration-1000" />
          <CheckCircle2 className="relative h-16 w-16 text-liminal-secondary" />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-heading font-bold">Identity Verified</h3>
          <p className="text-sm text-muted-foreground max-w-xs">
            Your identity has been successfully verified. Redirecting you to your professional dashboard...
          </p>
        </div>
      </div>
    );
  }

  return (
    <form className="space-y-8" onSubmit={handleSubmit}>
      {/* OTP Input Section */}
      <div className="flex flex-col items-center gap-6">
        <InputOTP
          maxLength={6}
          value={otp}
          onChange={(value) => setOtp(value)}
          containerClassName="group"
        >
          <InputOTPGroup>
            <InputOTPSlot index={0} className="size-12 lg:size-14 text-lg" />
            <InputOTPSlot index={1} className="size-12 lg:size-14 text-lg" />
            <InputOTPSlot index={2} className="size-12 lg:size-14 text-lg" />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={3} className="size-12 lg:size-14 text-lg" />
            <InputOTPSlot index={4} className="size-12 lg:size-14 text-lg" />
            <InputOTPSlot index={5} className="size-12 lg:size-14 text-lg" />
          </InputOTPGroup>
        </InputOTP>

        <p className="text-xs text-muted-foreground">
          Enter the 6-digit code sent to your registered email.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="space-y-4">
        <LiminalButton
          className="w-full shadow-none"
          type="submit"
          isLoading={isLoading}
          disabled={otp.length !== 6}
        >
          Verify Code
        </LiminalButton>

        <button
          type="button"
          className="flex w-full items-center justify-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
        >
          <RefreshCw size={14} className="group-hover:rotate-180 transition-transform duration-500" />
          Resend Verification Code
        </button>
      </div>
    </form>
  );
};

export default VerifyForm;
