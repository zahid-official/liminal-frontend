"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { ModeToggle } from "../ui/mode-toggler";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Menu } from "lucide-react";
import { Separator } from "../ui/separator";
import { cn } from "@/lib/utils";

// Navbar Component
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation links
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Blogs", href: "/blogs" },
    { label: "About Us", href: "/about-us" },
    { label: "Contact", href: "/contact" },
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
            {navLinks?.map((item, idx) => {
              const isActive = pathname === item?.href;
              return (
                <Link
                  key={idx}
                  href={item?.href}
                  className={cn(
                    "font-medium relative pb-0.5",
                    "after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-left after:bg-current after:transition-transform after:duration-300 after:scale-x-0 hover:after:scale-x-100",
                    isActive && "after:scale-x-100",
                  )}
                >
                  {item?.label}
                </Link>
              );
            })}
          </nav>

          <Separator
            orientation="vertical"
            className={cn(
              "mx-1 max-md:hidden transition-colors duration-300",
              isScrolled ? "bg-foreground/20" : "bg-white/20",
            )}
          />

          {/* Dark Mode & Buttons */}
          <div className="flex items-center md:gap-3.5">
            <ModeToggle isScrolled={isScrolled} />

            <Link href={"/login"}>
              <Button
                className={cn(
                  "max-md:hidden px-6 text-base transition-all duration-300",
                  !isScrolled &&
                    "bg-white text-black hover:bg-white/90 border-white",
                )}
              >
                Login
              </Button>
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
                      "bg-primary text-primary-foreground border-primary hover:bg-primary/90 hover:text-primary-foreground dark:bg-input/30 dark:text-foreground dark:border-input dark:hover:bg-input/50 dark:hover:text-accent-foreground",
                  )}
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="w-52 -right-4.5 top-1 absolute border p-3 md:hidden">
                {navLinks?.map((item, idx) => {
                  const isActive = pathname === item?.href;
                  return (
                    <DropdownMenuItem
                      key={idx}
                      className={cn(
                        "justify-center cursor-pointer",
                        isActive && "bg-primary/10 dark:bg-primary/20"
                      )}
                      asChild
                    >
                      <Link 
                        href={item?.href} 
                        className={cn(
                          "hover:text-primary w-full text-center transition-colors block",
                          isActive && "text-primary font-medium"
                        )}
                      >
                        {item?.label}
                      </Link>
                    </DropdownMenuItem>
                  );
                })}

                <DropdownMenuSeparator className="mt-2.5" />
                <div className="mt-2.5">
                  <Link href={"/login"} className="w-full" tabIndex={0}>
                    <Button className="w-full cursor-pointer">Login</Button>
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
