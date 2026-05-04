"use client";

import LiminalButton from "@/components/shared/LiminalButton";
import { Button } from "@/components/ui/button";
import { Field, FieldLabel, FieldSeparator } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Chrome, Facebook, Eye, EyeOff, Lock, Mail } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

// Social Providers
const socialProviders = [
  { name: "Google", icon: Chrome },
  { name: "Facebook", icon: Facebook },
];

// LoginForm Component
const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form className="space-y-7" onSubmit={(e) => e.preventDefault()}>
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
        <div className="flex items-center justify-between">
          <FieldLabel
            htmlFor="password"
            className="text-xs font-semibold uppercase tracking-wider text-muted-foreground transition-colors group-focus-within:text-liminal-secondary"
          >
            Password
          </FieldLabel>

          {/* Forgot password */}
          <Link
            href="/forgot-password"
            className="text-xs font-medium text-liminal-secondary hover:underline underline-offset-4"
          >
            Forgot password?
          </Link>
        </div>

        {/* Password input */}
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

      {/* Sign in button */}
      <LiminalButton className="w-full mt-10 shadow-none" type="submit">
        Sign In to Account
      </LiminalButton>

      {/* Separator */}
      <FieldSeparator className="my-8 text-[11px] uppercase tracking-widest text-muted-foreground">
        Or continue with
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

export default LoginForm;
