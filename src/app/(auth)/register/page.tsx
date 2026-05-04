import RegisterBranding from "@/components/modules/auth/register/RegisterBranding";
import RegisterFormWrapper from "@/components/modules/auth/register/RegisterFormWrapper";
import Logo from "@/components/shared/Logo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register | Liminal Architecture & Design",
  description:
    "Join the Liminal collective. Create your account to access exclusive architectural resources, project management tools, and a community of design excellence.",
};

// RegisterPage Component
const RegisterPage = () => {
  return (
    <main className="relative flex min-h-screen w-full flex-col overflow-hidden lg:flex-row">
      {/* Mobile Logo Only */}
      <div className="absolute top-6 left-6 z-50 lg:hidden">
        <Logo isScrolled={true} />
      </div>

      {/* Left Side: Branding & Phases (Register-Specific Identity) */}
      <div className="hidden h-screen w-[60%] lg:block">
        <RegisterBranding />
      </div>

      {/* Right Side: Register Form */}
      <div className="flex flex-1 items-center justify-center p-8 lg:p-12">
        <div className="w-full max-w-lg">
          <RegisterFormWrapper />
        </div>
      </div>
    </main>
  );
};

export default RegisterPage;
