"use client";

import { cn } from "@/lib/utils";
import { ChevronDown, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Separator } from "../ui/separator";
import AnimatedButton from "./AnimatedButton";
import Logo from "./Logo";

// Navbar Component
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Ensure state is correct on initial load or reload
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation links
  const navLinks = [
    { label: "Home", href: "/" },
    {
      label: "Services",
      href: "/services",
      subItems: [
        { label: "Interior Design", href: "/services/interior" },
        { label: "Furniture", href: "/services/furniture" },
      ],
    },
    { label: "Projects", href: "/projects" },
    { label: "Blog", href: "/blog" },
    { label: "About Us", href: "/about-us" },
    { label: "Contact Us", href: "/contact" },
  ];
  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-[background-color,backdrop-filter,box-shadow] duration-300",
        "pr-(--removed-body-scroll-bar-size,0px)",
        isScrolled
          ? "bg-background/70 backdrop-blur-2xl shadow-sm"
          : "bg-transparent",
      )}
    >
      <div className="custom-container py-6 flex items-center justify-between gap-2">
        {/* Logo */}
        <Link href="/">
          <Logo isScrolled={isScrolled} />
        </Link>

        <div className="flex items-center gap-2.5">
          {/* Desktop Nav */}
          <nav
            className={cn(
              "flex items-center gap-5.5 font-medium max-md:hidden transition-colors",
              isScrolled ? "text-foreground" : "text-white",
            )}
          >
            {navLinks.map((item, idx) => {
              const isActive = pathname === item.href;
              const hasSubItems = item.subItems && item.subItems.length > 0;

              if (hasSubItems) {
                return (
                  <div key={idx} className="group relative">
                    <Link
                      href={item.href}
                      className={cn(
                        "font-medium relative pb-0.5 flex items-center gap-1.5 transition-colors",
                        "after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-left after:bg-current after:transition-transform after:duration-300 after:scale-x-0 group-hover:after:scale-x-100",
                        isActive && "after:scale-x-100",
                      )}
                    >
                      {item.label}
                      <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180 opacity-70" />
                    </Link>

                    {/* Premium Submenu */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                      <div className="bg-background/98 backdrop-blur-xl border border-border/40 shadow-[0_20px_50px_rgba(0,0,0,0.15)] py-2.5 min-w-55 overflow-hidden rounded-sm">
                        {/* Subtle top indicator matching Liminal brand accent */}
                        <div className="absolute top-0 left-0 w-full h-0.5 bg-liminal-secondary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100" />

                        <div className="px-6 mb-1.5 text-center">
                          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground/60">
                            Our Expertise
                          </span>
                        </div>

                        <div className="px-2 space-y-1">
                          {item.subItems.map((sub, sIdx) => {
                            const isSubActive = pathname === sub.href;
                            return (
                              <Link
                                key={sIdx}
                                href={sub.href}
                                className={cn(
                                  "flex items-center px-4 py-2.5 font-medium transition-all duration-300 rounded-sm",
                                  "hover:bg-primary/5 hover:pl-6 text-foreground",
                                  isSubActive
                                    ? "text-liminal-secondary bg-primary/5"
                                    : "opacity-75 hover:opacity-100",
                                )}
                              >
                                {sub.label}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={idx}
                  href={item.href}
                  className={cn(
                    "font-medium relative pb-0.5",
                    "after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-left after:bg-current after:transition-transform after:duration-300 after:scale-x-0 hover:after:scale-x-100",
                    isActive && "after:scale-x-100",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <Separator
            orientation="vertical"
            className={cn(
              "mx-1 max-md:hidden transition-colors duration-300",
              isScrolled ? "bg-foreground/25" : "bg-white/25",
            )}
          />

          {/* Auth & Actions Button */}
          <div className="flex items-center md:gap-3.5">
            <Link href="/login">
              <AnimatedButton
                className={cn(
                  "max-md:hidden text-base tracking-[0.03em] transition-all duration-300 pl-4.5 gap-2",
                  isScrolled
                    ? "border-foreground/25"
                    : "bg-white text-black hover:bg-white/90",
                )}
              >
                Login
              </AnimatedButton>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <nav className="relative md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className={cn(
                    isScrolled &&
                      "bg-liminal-secondary hover:bg-liminal-secondary/95 text-primary-foreground border-primary hover:text-primary-foreground border-none",
                  )}
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="w-52 -right-4.5 top-1 absolute border p-3 md:hidden">
                {navLinks.map((item, idx) => {
                  const isActive = pathname === item.href;
                  const hasSubItems = item.subItems && item.subItems.length > 0;

                  return (
                    <React.Fragment key={idx}>
                      <DropdownMenuItem
                        className={cn(
                          "justify-center cursor-pointer",
                          isActive && "bg-primary/10",
                        )}
                        asChild
                      >
                        <Link
                          href={item.href}
                          className={cn(
                            "hover:text-primary w-full text-center transition-colors block",
                            isActive && "text-primary font-semibold",
                          )}
                        >
                          {item.label}
                        </Link>
                      </DropdownMenuItem>

                      {hasSubItems &&
                        item.subItems.map((sub, sIdx) => (
                          <DropdownMenuItem
                            key={`${idx}-${sIdx}`}
                            className={cn(
                              "justify-center cursor-pointer opacity-80 scale-95 uppercase tracking-widest",
                              pathname === sub.href && "bg-primary/5",
                            )}
                            asChild
                          >
                            <Link
                              href={sub.href}
                              className={cn(
                                "hover:text-primary w-full text-center transition-colors block text-[10px] font-bold",
                                pathname === sub.href &&
                                  "text-primary font-bold",
                              )}
                            >
                              {sub.label}
                            </Link>
                          </DropdownMenuItem>
                        ))}
                    </React.Fragment>
                  );
                })}

                <DropdownMenuSeparator className="mt-2.5" />
                <div className="mt-2.5">
                  <Link href={"/login"} className="w-full" tabIndex={0}>
                    <Button className="w-full cursor-pointer bg-liminal-secondary hover:bg-liminal-secondary/95">
                      Login
                    </Button>
                  </Link>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
