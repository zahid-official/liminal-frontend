"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

export function ModeToggle({ isScrolled }: { isScrolled: boolean }) {
  const { setTheme } = useTheme();

  return (
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
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="py-2">
        {/* Light Mode*/}
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className="justify-center cursor-pointer"
        >
          Light
        </DropdownMenuItem>

        {/* Dark Mode */}
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className="justify-center cursor-pointer"
        >
          Dark
        </DropdownMenuItem>

        {/* System Mode */}
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className="justify-center cursor-pointer"
        >
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
