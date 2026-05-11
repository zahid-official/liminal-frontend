"use client";

import LiminalButton from "@/components/shared/LiminalButton";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Mail, CheckCircle2 } from "lucide-react";
import { useState } from "react";

// ForgotPasswordForm Component
const ForgotPasswordForm = () => {
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    setIsSent(true);
  };

  if (isSent) {
    return (
      <div className="flex flex-col items-center justify-center space-y-6 text-center animate-in fade-in zoom-in-95 duration-700 transform-[translateZ(0)] will-change-[opacity,transform]">
        <div className="relative">
          <div className="absolute inset-0 animate-ping rounded-full bg-liminal-secondary/20 duration-1000" />
          <CheckCircle2 className="relative h-16 w-16 text-liminal-secondary" />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-heading font-bold">Check your inbox</h3>
          <p className="text-sm text-muted-foreground max-w-xs">
            We&apos;ve sent a password reset link to your email address. Please follow the instructions to reset your password.
          </p>
        </div>
        <LiminalButton 
          variant="outline" 
          className="mt-4"
          onClick={() => setIsSent(false)}
        >
          Resend Link
        </LiminalButton>
      </div>
    );
  }

  return (
    <form className="space-y-7" onSubmit={handleSubmit}>
      {/* Email field */}
      <Field className="space-y-1 group">
        <FieldLabel
          htmlFor="email"
          className="text-xs font-semibold uppercase tracking-wider text-muted-foreground transition-colors group-focus-within:text-liminal-secondary"
        >
          Email Address
        </FieldLabel>

        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-4.5 text-muted-foreground/70 group-focus-within:text-liminal-secondary transition-colors" />
          <Input
            id="email"
            type="email"
            placeholder="name@example.com"
            className="pl-10 h-12 focus-visible:ring-liminal-secondary/10 focus-visible:border-liminal-secondary"
            required
          />
        </div>
      </Field>

      {/* Submit button */}
      <LiminalButton 
        className="w-full mt-10 shadow-none" 
        type="submit"
        isLoading={isLoading}
      >
        Send Reset Link
      </LiminalButton>
    </form>
  );
};

export default ForgotPasswordForm;
