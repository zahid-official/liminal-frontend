import { Metadata } from "next";
import LoginSplitLayout from "@/components/modules/auth/login/LoginSplitLayout";

export const metadata: Metadata = {
  title: "Login | Access Your Design Portal",
  description: "Securely sign in to your Liminal account to manage your projects and design collections.",
};

const LoginPage = () => {
  return (
    <main className="min-h-screen">
      <LoginSplitLayout />
    </main>
  );
};

export default LoginPage;
