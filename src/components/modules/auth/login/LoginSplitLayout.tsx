import React from "react";
import LoginVisual from "./LoginVisual";
import LoginForm from "./LoginForm";

const LoginSplitLayout = () => {
  return (
    <div className="relative min-h-screen grid lg:grid-cols-2 overflow-hidden bg-background">
      {/* Visual Side */}
      <LoginVisual />

      {/* Form Side */}
      <div className="flex flex-col items-center justify-center p-8 lg:p-12 relative">
        {/* Subtle decorative elements for the form side */}
        <div className="absolute top-0 right-0 p-10 opacity-10 pointer-events-none">
          <div className="w-64 h-64 border border-liminal-secondary rounded-full -mr-32 -mt-32" />
        </div>
        
        <LoginForm />
        
        {/* Footer info for mobile */}
        <div className="mt-12 lg:hidden text-center">
          <p className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
            © 2024 Liminal Design Agency
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginSplitLayout;
