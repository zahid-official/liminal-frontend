import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import ForgotPasswordForm from "./ForgotPasswordForm";

// ForgotPasswordFormWrapper Component
const ForgotPasswordFormWrapper = () => {
  return (
    <div className="mx-auto flex w-full flex-col justify-center space-y-8 sm:w-md animate-in fade-in slide-in-from-right-4 duration-1000 ease-in-out">
      {/* Top: Header Section */}
      <div className="flex flex-col gap-1 text-center lg:text-left">
        {/* Back button */}
        <div className="mb-8 flex justify-center lg:justify-start">
          <Link
            href="/login"
            className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft
              size={14}
              className="transition-transform group-hover:-translate-x-1"
            />
            Back to login
          </Link>
        </div>

        {/* Heading and Description */}
        <h1 className="text-3xl font-heading font-bold tracking-tight">
          Recover Access
        </h1>
        <p className="text-sm text-muted-foreground">
          Enter your email and we&apos;ll send you instructions to reset your password and regain access to your professional dashboard.
        </p>
      </div>

      {/* Middle: Forgot Password Form */}
      <ForgotPasswordForm />

      {/* Bottom: Contact Support Link */}
      <p className="text-center text-sm text-muted-foreground">
        Having trouble?{" "}
        <Link
          href="/contact"
          className="font-medium text-foreground/85 hover:underline underline-offset-4 hover:text-foreground transition-colors"
        >
          Contact Support
        </Link>
      </p>
    </div>
  );
};

export default ForgotPasswordFormWrapper;
