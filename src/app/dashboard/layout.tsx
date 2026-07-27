import { ILayoutProps } from "@/types";

// DashboardLayout Component
const DashboardLayout = ({ children }: ILayoutProps) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
};

export default DashboardLayout;
