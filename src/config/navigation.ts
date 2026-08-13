import {
  ArmchairIcon,
  BarChart3Icon,
  BriefcaseIcon,
  FileTextIcon,
  FolderGit2Icon,
  GlobeIcon,
  InboxIcon,
  LayoutDashboardIcon,
  MessageSquareIcon,
  Settings2Icon,
  UserIcon,
  UsersIcon,
} from "lucide-react";
import * as React from "react";

export type UserRole = "admin" | "user";

export interface NavSubItem {
  title: string;
  url: string;
}

export interface NavItem {
  title: string;
  url: string;
  icon?: React.ReactNode;
  isActive?: boolean;
  items?: NavSubItem[];
}

export interface QuickLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}

// Navigation layout for Admin role
export const adminNavMain: NavItem[] = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: React.createElement(LayoutDashboardIcon),
    isActive: true,
  },
  {
    title: "Projects & Portfolio",
    url: "/dashboard/projects",
    icon: React.createElement(FolderGit2Icon),
    items: [
      {
        title: "All Projects",
        url: "/dashboard/projects",
      },
      {
        title: "Add New Project",
        url: "/dashboard/projects/create",
      },
    ],
  },
  {
    title: "Furniture",
    url: "/dashboard/furniture",
    icon: React.createElement(ArmchairIcon),
    items: [
      {
        title: "All Furniture",
        url: "/dashboard/furniture",
      },
      {
        title: "Add New Furniture",
        url: "/dashboard/furniture/create",
      },
    ],
  },
  {
    title: "Blog & Content",
    url: "/dashboard/blog",
    icon: React.createElement(FileTextIcon),
    items: [
      {
        title: "All Articles",
        url: "/dashboard/blog",
      },
      {
        title: "Create Article",
        url: "/dashboard/blog/create",
      },
    ],
  },
  {
    title: "Inquiries & Leads",
    url: "/dashboard/inquiries",
    icon: React.createElement(InboxIcon),
  },
  {
    title: "Users Management",
    url: "/dashboard/users",
    icon: React.createElement(UsersIcon),
  },
  {
    title: "Settings",
    url: "/dashboard/settings",
    icon: React.createElement(Settings2Icon),
    items: [
      {
        title: "General Settings",
        url: "/dashboard/settings",
      },
      {
        title: "SEO & Meta",
        url: "/dashboard/settings/seo",
      },
    ],
  },
];

// Navigation layout for User role
export const userNavMain: NavItem[] = [
  {
    title: "Overview",
    url: "/dashboard",
    icon: React.createElement(LayoutDashboardIcon),
    isActive: true,
  },
  {
    title: "My Projects",
    url: "/dashboard/my-projects",
    icon: React.createElement(FolderGit2Icon),
  },
  {
    title: "Requested Services",
    url: "/dashboard/my-services",
    icon: React.createElement(BriefcaseIcon),
  },
  {
    title: "Support & Inquiries",
    url: "/dashboard/support",
    icon: React.createElement(MessageSquareIcon),
  },
  {
    title: "Account Settings",
    url: "/dashboard/settings/profile",
    icon: React.createElement(UserIcon),
  },
];

export const defaultQuickLinks: QuickLink[] = [
  {
    name: "View Live Site",
    url: "/",
    icon: React.createElement(GlobeIcon),
  },
  {
    name: "Analytics",
    url: "/dashboard/analytics",
    icon: React.createElement(BarChart3Icon),
  },
];
