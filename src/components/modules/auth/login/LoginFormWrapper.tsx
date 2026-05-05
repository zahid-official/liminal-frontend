import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import LoginForm from "./LoginForm";

// LoginFormWrapper Component
const LoginFormWrapper = () => {
  return (
    <div className="mx-auto flex w-full flex-col justify-center space-y-8 sm:w-md animate-in fade-in slide-in-from-right-4 duration-1000 ease-in-out transform-[translateZ(0)] will-change-[opacity,transform]">
      {/* Top: Header Section */}
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

        {/* Heading and Description */}
        <h1 className="text-3xl font-heading font-bold tracking-tight">
          Welcome Back
        </h1>
        <p className="text-sm text-muted-foreground">
          Enter your credentials to access your professional dashboard.
        </p>
      </div>

      {/* Middle: Login Form */}
      <LoginForm />

      {/* Bottom: Sign Up Link */}
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

export default LoginFormWrapper;
