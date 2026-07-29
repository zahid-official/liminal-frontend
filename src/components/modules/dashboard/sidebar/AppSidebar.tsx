"use client";

import Logo from "@/components/shared/Logo";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import {
  adminNavMain,
  defaultQuickLinks,
  NavItem,
  QuickLink,
  userNavMain,
  UserRole,
} from "@/config/navigation";
import Link from "next/link";
import * as React from "react";
import { NavMain } from "./NavMain";
import { NavProjects } from "./NavProjects";
import { NavUser } from "./NavUser";

const userProfile = {
  name: "Liminal User",
  email: "user@liminalbd.com",
  avatar: "/avatars/user.jpg",
};

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  role?: UserRole;
  items?: NavItem[];
  quickLinks?: QuickLink[];
}

export function AppSidebar({
  role = "admin",
  items,
  quickLinks,
  ...props
}: AppSidebarProps) {
  const navMain = items ?? (role === "admin" ? adminNavMain : userNavMain);
  const links = quickLinks ?? defaultQuickLinks;

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-heading font-semibold text-lg">
                  L
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight group-data-[collapsible=icon]:hidden">
                  <Logo isScrolled={true} className="text-3xl" />
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navMain} />
        <NavProjects projects={links} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={userProfile} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
