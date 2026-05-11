import VerifyBranding from "@/components/modules/auth/verify/VerifyBranding";
import VerifyFormWrapper from "@/components/modules/auth/verify/VerifyFormWrapper";
import Logo from "@/components/shared/Logo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Verify Identity | Liminal Architecture & Design",
  description:
    "Securely verify your identity to access your premium architectural dashboard and professional design tools.",
};

// VerifyPage
const VerifyPage = () => {
  return (
    <main className="relative flex min-h-screen w-full flex-col overflow-hidden lg:flex-row">
      {/* Mobile Logo Only */}
      <div className="absolute top-8 left-0 right-0 z-50 flex justify-center lg:hidden">
        <Logo isScrolled={true} />
      </div>

      {/* Left Side: Security Branding & Showcase */}
      <div className="hidden h-screen w-[60%] lg:block">
        <VerifyBranding />
      </div>

      {/* Right Side: Verification Form */}
      <div className="flex flex-1 items-center justify-center p-6 lg:p-0">
        <div className="w-full max-w-lg">
          <VerifyFormWrapper />
        </div>
      </div>
    </main>
  );
};

export default VerifyPage;
