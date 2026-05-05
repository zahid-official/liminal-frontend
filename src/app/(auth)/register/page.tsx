import RegisterBranding from "@/components/modules/auth/register/RegisterBranding";
import RegisterFormWrapper from "@/components/modules/auth/register/RegisterFormWrapper";
import Logo from "@/components/shared/Logo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register | Liminal Architecture & Design",
  description:
    "Join the Liminal collective to access premium architectural projects and collaborate with professional designers.",
};

// RegisterPage
const RegisterPage = () => {
  return (
    <main className="relative flex min-h-screen w-full flex-col overflow-hidden lg:flex-row">
      {/* Mobile Logo Only */}
      <div className="absolute top-6 left-6 z-50 lg:hidden">
        <Logo isScrolled={true} />
      </div>

      {/* Left Side: Branding & Features */}
      <div className="hidden h-screen w-[60%] lg:block">
        <RegisterBranding />
      </div>

      {/* Right Side: Register Form */}
      <div className="flex flex-1 items-center justify-center p-6 lg:p-0">
        <div className="w-full max-w-lg">
          <RegisterFormWrapper />
        </div>
      </div>
    </main>
  );
};

export default RegisterPage;
