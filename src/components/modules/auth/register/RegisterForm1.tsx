"use client";

import LiminalButton from "@/components/shared/LiminalButton";
import { Button } from "@/components/ui/button";
import { Field, FieldLabel, FieldSeparator } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Chrome, Facebook, Eye, EyeOff, Lock, Mail, User, ShieldCheck } from "lucide-react";
import { useState } from "react";

// Social Providers
const socialProviders = [
  { name: "Google", icon: Chrome },
  { name: "Facebook", icon: Facebook },
];

/**
 * RegisterForm Component
 * A premium registration form with validation and elegant interactions.
 */
const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
      {/* Full Name field */}
      <Field className="space-y-1 group">
        <FieldLabel
          htmlFor="fullName"
          className="text-xs font-semibold uppercase tracking-wider text-muted-foreground transition-colors group-focus-within:text-liminal-secondary"
        >
          Full Name
        </FieldLabel>

        <div className="relative">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 size-4.5 text-muted-foreground/70 group-focus-within:text-liminal-secondary transition-colors" />
          <Input
            id="fullName"
            type="text"
            placeholder="John Doe"
            className="pl-10 h-12 focus-visible:ring-liminal-secondary/10 focus-visible:border-liminal-secondary"
            required
          />
        </div>
      </Field>

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

      {/* Password field */}
      <Field className="space-y-1 group">
        <FieldLabel
          htmlFor="password"
          className="text-xs font-semibold uppercase tracking-wider text-muted-foreground transition-colors group-focus-within:text-liminal-secondary"
        >
          Password
        </FieldLabel>

        <div className="relative">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 size-4.5 text-muted-foreground/70 group-focus-within:text-liminal-secondary transition-colors" />
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            className="pl-10 pr-10 h-12 focus-visible:ring-liminal-secondary/10 focus-visible:border-liminal-secondary"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground/70 hover:text-foreground transition-colors focus:outline-none cursor-pointer"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              <EyeOff className="size-4.5" />
            ) : (
              <Eye className="size-4.5" />
            )}
          </button>
        </div>
      </Field>

      {/* Confirm Password field */}
      <Field className="space-y-1 group">
        <FieldLabel
          htmlFor="confirmPassword"
          className="text-xs font-semibold uppercase tracking-wider text-muted-foreground transition-colors group-focus-within:text-liminal-secondary"
        >
          Confirm Password
        </FieldLabel>

        <div className="relative">
          <ShieldCheck className="absolute left-3 top-1/2 -translate-y-1/2 size-4.5 text-muted-foreground/70 group-focus-within:text-liminal-secondary transition-colors" />
          <Input
            id="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            placeholder="••••••••"
            className="pl-10 pr-10 h-12 focus-visible:ring-liminal-secondary/10 focus-visible:border-liminal-secondary"
            required
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground/70 hover:text-foreground transition-colors focus:outline-none cursor-pointer"
            aria-label={showConfirmPassword ? "Hide password" : "Show password"}
          >
            {showConfirmPassword ? (
              <EyeOff className="size-4.5" />
            ) : (
              <Eye className="size-4.5" />
            )}
          </button>
        </div>
      </Field>

      {/* Register button */}
      <LiminalButton className="w-full mt-6 shadow-none" type="submit">
        Create Professional Account
      </LiminalButton>

      {/* Separator */}
      <FieldSeparator className="my-8 text-[11px] uppercase tracking-widest text-muted-foreground">
        Or register with
      </FieldSeparator>

      {/* Social buttons */}
      <div className="grid grid-cols-2 gap-4">
        {socialProviders.map((provider) => (
          <Button
            key={provider.name}
            variant="outline"
            type="button"
            className="h-12 rounded-full border-border/50 gap-1.5 transition-all duration-300"
          >
            <provider.icon className="size-4" />
            {provider.name}
          </Button>
        ))}
      </div>
    </form>
  );
};

export default RegisterForm;
