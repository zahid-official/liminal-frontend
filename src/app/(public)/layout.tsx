import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { ILayoutProps } from "@/types";

// PublicLayout Component
const PublicLayout = ({ children }: ILayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="grow">{children}</main>
      <Footer />
    </div>
  );
};

export default PublicLayout;
