import { ILayoutProps } from "@/types";

// DashboardLayout Component
const DashboardLayout = ({ children }: ILayoutProps) => {
  return (
    <div>
      <h1>Welcome to the DashboardLayout Component</h1>
      {children}
    </div>
  );
};

export default DashboardLayout;
