"use client";

import LiminalButton from "@/components/shared/LiminalButton";
import { Button } from "@/components/ui/button";
import { Field, FieldLabel, FieldSeparator } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Apple,
  ArrowLeft,
  Chrome,
  Eye,
  EyeOff,
  Lock,
  Mail,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const socialProviders = [
  { name: "Google", icon: Chrome },
  { name: "Apple", icon: Apple },
];

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="mx-auto flex w-full flex-col justify-center space-y-8 sm:w-md animate-in fade-in slide-in-from-right-4 duration-1000 ease-in-out">
      {/* Header Section */}
      <div className="flex flex-col gap-1 text-center lg:text-left">
        {/* Back button */}
        <div className="mb-8 flex justify-center lg:justify-start">
          <Link
            href="/"
            className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft
              size={14}
              className="transition-transform group-hover:-translate-x-1"
            />
            Back to home
          </Link>
        </div>

        <h1 className="text-3xl font-heading font-bold tracking-tight">
          Welcome Back
        </h1>
        <p className="text-sm text-muted-foreground">
          Enter your credentials to access your professional dashboard.
        </p>
      </div>

      {/* Login Form */}
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

          {/* Password field */}
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

      {/* Sign Up Link */}
      <p className="text-center text-sm text-muted-foreground">
        Don&apos;t have an account?{" "}
        <Link
          href="/register"
          className="font-medium text-foreground/85 hover:underline underline-offset-4 hover:text-foreground transition-colors"
        >
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
