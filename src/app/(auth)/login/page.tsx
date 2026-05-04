import LoginBranding from "@/components/modules/auth/login/LoginBranding";
import LoginFormWrapper from "@/components/modules/auth/login/LoginFormWrapper";
import Logo from "@/components/shared/Logo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | Liminal Architecture & Design",
  description:
    "Securely sign in to your Liminal account to access premium architectural projects and professional design tools.",
};

// LoginPage
const LoginPage = () => {
  return (
    <main className="relative flex min-h-screen w-full flex-col overflow-hidden lg:flex-row">
      {/* Mobile Logo Only */}
      <div className="absolute top-6 left-6 z-50 lg:hidden">
        <Logo isScrolled={true} />
      </div>

      {/* Left Side: Branding & Features */}
      <div className="hidden h-screen w-[60%] lg:block">
        <LoginBranding />
      </div>

      {/* Right Side: Login Form */}
      <div className="flex flex-1 items-center justify-center">
        <div className="w-full max-w-lg">
          <LoginFormWrapper />
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
