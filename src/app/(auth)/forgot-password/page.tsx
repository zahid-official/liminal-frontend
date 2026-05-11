import ForgotPasswordBranding from "@/components/modules/auth/forgot-password/ForgotPasswordBranding";
import ForgotPasswordFormWrapper from "@/components/modules/auth/forgot-password/ForgotPasswordFormWrapper";
import Logo from "@/components/shared/Logo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recover Password | Liminal Architecture & Design",
  description:
    "Reset your Liminal account password to regain access to your professional architectural dashboard and expert tools.",
};

// ForgotPasswordPage
const ForgotPasswordPage = () => {
  return (
    <main className="relative flex min-h-screen w-full flex-col overflow-hidden lg:flex-row">
      {/* Mobile Logo Only */}
      <div className="absolute top-8 left-0 right-0 z-50 flex justify-center lg:hidden">
        <Logo isScrolled={true} />
      </div>

      {/* Left Side: Professional Branding & Showcase */}
      <div className="hidden h-screen w-[60%] lg:block">
        <ForgotPasswordBranding />
      </div>

      {/* Right Side: Recovery Form */}
      <div className="flex flex-1 items-center justify-center p-6 lg:p-0">
        <div className="w-full max-w-lg">
          <ForgotPasswordFormWrapper />
        </div>
      </div>
    </main>
  );
};

export default ForgotPasswordPage;
