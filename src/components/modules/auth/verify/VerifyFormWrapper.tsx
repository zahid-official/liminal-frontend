import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import VerifyForm from "./VerifyForm";

// VerifyFormWrapper Component
const VerifyFormWrapper = () => {
  return (
    <div className="mx-auto flex w-full flex-col justify-center space-y-8 sm:w-md animate-in fade-in slide-in-from-right-4 duration-1000 ease-in-out transform-[translateZ(0)] will-change-[opacity,transform]">
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
          Verify Identity
        </h1>
        <p className="text-sm text-muted-foreground">
          We&apos;ve sent a secure verification code to your email. Please enter it below to complete your authentication.
        </p>
      </div>

      {/* Middle: Verify Form */}
      <VerifyForm />

      {/* Bottom: Support Link */}
      <p className="text-center text-sm text-muted-foreground">
        Didn&apos;t receive the code?{" "}
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

export default VerifyFormWrapper;
