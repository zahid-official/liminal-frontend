"use client";

import LiminalButton from "@/components/shared/LiminalButton";
import { Button } from "@/components/ui/button";
import { Field, FieldLabel, FieldSeparator } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Chrome, Facebook, Eye, EyeOff, Lock, Mail, User } from "lucide-react";
import { useState } from "react";

// Social Providers
const socialProviders = [
  { name: "Google", icon: Chrome },
  { name: "Facebook", icon: Facebook },
];

// RegisterForm Component
const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
      {/* Name field */}
      <Field className="space-y-1 group">
        <FieldLabel
          htmlFor="name"
          className="text-xs font-semibold uppercase tracking-wider text-muted-foreground transition-colors group-focus-within:text-liminal-secondary"
        >
          Full Name
        </FieldLabel>

        <div className="relative">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 size-4.5 text-muted-foreground/70 group-focus-within:text-liminal-secondary transition-colors" />
          <Input
            id="name"
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

      {/* Terms and conditions */}
      <div className="flex items-center space-x-2 pt-1">
        <p className="text-[11px] text-muted-foreground leading-relaxed">
          By clicking &quot;Create Account&quot;, you agree to our{" "}
          <button type="button" className="text-foreground hover:underline underline-offset-4">Terms of Service</button> and{" "}
          <button type="button" className="text-foreground hover:underline underline-offset-4">Privacy Policy</button>.
        </p>
      </div>

      {/* Create button */}
      <LiminalButton className="w-full mt-6 shadow-none" type="submit">
        Create Professional Account
      </LiminalButton>

      {/* Separator */}
      <FieldSeparator className="my-8 text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-medium">
        Or register with
      </FieldSeparator>

      {/* Social buttons */}
      <div className="grid grid-cols-2 gap-4">
        {socialProviders.map((provider) => (
          <Button
            key={provider.name}
            variant="outline"
            type="button"
            className="h-11 rounded-full border-border/50 gap-2 text-xs font-medium hover:bg-muted/50 transition-all duration-300"
          >
            <provider.icon className="size-3.5" />
            {provider.name}
          </Button>
        ))}
      </div>
    </form>
  );
};

export default RegisterForm;
