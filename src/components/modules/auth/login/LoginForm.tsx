"use client";

import React from "react";
import Link from "next/link";
import { Mail, Lock, Chrome, Apple, ArrowLeft } from "lucide-react";
import LiminalButton from "@/components/shared/LiminalButton";
import Logo from "@/components/shared/Logo";

const LoginForm = () => {
  return (
    <div className="flex w-full flex-col justify-center space-y-8 sm:w-[400px] animate-in fade-in slide-in-from-bottom-4 duration-1000 ease-out">
      <div className="flex flex-col space-y-2 text-center lg:text-left">
        <div className="mb-6 flex justify-center lg:justify-start">
          <Link href="/" className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-4">
            <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
            Back to home
          </Link>
        </div>
        <div className="mb-4 flex justify-center lg:justify-start scale-110 origin-left">
          <Logo />
        </div>
        <h1 className="text-4xl font-heading tracking-tight font-bold">Welcome Back</h1>
        <p className="text-sm text-muted-foreground font-light tracking-wide">
          Enter your credentials to access your design portal
        </p>
      </div>

      <div className="grid gap-6">
        <form onSubmit={(e) => e.preventDefault()} className="grid gap-5">
          <div className="grid gap-2">
            <label
              className="text-[12px] font-bold uppercase tracking-[0.2em] text-muted-foreground ml-1"
              htmlFor="email"
            >
              Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-muted-foreground/50">
                <Mail size={18} strokeWidth={1.5} />
              </div>
              <input
                id="email"
                placeholder="name@agency.com"
                type="email"
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect="off"
                className="flex h-14 w-full rounded-2xl border border-border/60 bg-background px-11 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-liminal-secondary/20 focus-visible:border-liminal-secondary transition-all duration-300"
              />
            </div>
          </div>
          <div className="grid gap-2">
            <div className="flex items-center justify-between ml-1">
              <label
                className="text-[12px] font-bold uppercase tracking-[0.2em] text-muted-foreground"
                htmlFor="password"
              >
                Password
              </label>
              <Link
                href="/forgot-password"
                className="text-[11px] font-medium text-liminal-secondary hover:underline underline-offset-4 tracking-wider"
              >
                Forgot password?
              </Link>
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-muted-foreground/50">
                <Lock size={18} strokeWidth={1.5} />
              </div>
              <input
                id="password"
                placeholder="••••••••"
                type="password"
                autoCapitalize="none"
                autoComplete="current-password"
                className="flex h-14 w-full rounded-2xl border border-border/60 bg-background px-11 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-liminal-secondary/20 focus-visible:border-liminal-secondary transition-all duration-300"
              />
            </div>
          </div>
          <LiminalButton className="w-full h-14 mt-2 text-[16px]">
            Sign In to Dashboard
          </LiminalButton>
        </form>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-border/60" />
          </div>
          <div className="relative flex justify-center text-[10px] uppercase tracking-[0.3em]">
            <span className="bg-background px-4 text-muted-foreground">Or continue with</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button className="flex h-13 items-center justify-center gap-3 rounded-2xl border border-border/60 bg-background text-sm font-medium transition-all hover:bg-zinc-50 hover:border-zinc-300">
            <Chrome size={18} />
            Google
          </button>
          <button className="flex h-13 items-center justify-center gap-3 rounded-2xl border border-border/60 bg-background text-sm font-medium transition-all hover:bg-zinc-50 hover:border-zinc-300">
            <Apple size={18} />
            Apple
          </button>
        </div>
      </div>

      <p className="px-8 text-center text-sm text-muted-foreground font-light leading-relaxed">
        By clicking continue, you agree to our{" "}
        <Link
          href="/terms"
          className="underline underline-offset-4 hover:text-liminal-secondary transition-colors"
        >
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link
          href="/privacy"
          className="underline underline-offset-4 hover:text-liminal-secondary transition-colors"
        >
          Privacy Policy
        </Link>
        .
      </p>
    </div>
  );
};

export default LoginForm;
