"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const interests = [
  "Residential Architecture",
  "Commercial Space",
  "Heritage Restoration",
  "Luxury Interior Design",
  "Strategic Consultancy",
];

const ContactForm = () => {
  const [interest, setInterest] = useState<string>("placeholder");

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Logic for transmitting inquiry would go here
  };

  return (
    <div className="lg:col-span-7">
      <form onSubmit={handleSubmit} className="space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {/* Name Field */}
          <Field className="space-y-4 group">
            <FieldLabel className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground group-focus-within:text-liminal-secondary transition-colors">
              Full Name
            </FieldLabel>
            <Input
              type="text"
              placeholder="e.g. Julian Anderson"
              className="w-full bg-transparent! border-t-0 border-x-0 border-b border-border/80 rounded-none p-0 pb-3 text-sm font-normal text-foreground focus-visible:ring-0 focus-visible:border-liminal-secondary transition-all placeholder:text-muted-foreground/40 placeholder:font-light h-auto"
              required
            />
          </Field>

          {/* Email Field */}
          <Field className="space-y-4 group">
            <FieldLabel className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground group-focus-within:text-liminal-secondary transition-colors">
              Email Address
            </FieldLabel>
            <Input
              type="email"
              placeholder="julian@example.com"
              className="w-full bg-transparent! border-t-0 border-x-0 border-b border-border/80 rounded-none p-0 pb-3 text-sm font-normal text-foreground focus-visible:ring-0 focus-visible:border-liminal-secondary transition-all placeholder:text-muted-foreground/40 placeholder:font-light h-auto"
              required
            />
          </Field>

          {/* Interest Field using Shadcn Select */}
          <Field className="space-y-4 group">
            <FieldLabel className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground group-focus-within:text-liminal-secondary transition-colors">
              Interest
            </FieldLabel>
            <Select defaultValue="placeholder" onValueChange={setInterest}>
              <SelectTrigger
                className={cn(
                  "w-full bg-transparent! border-t-0 border-x-0 border-b border-border/80 rounded-none p-0! pb-3 text-sm font-normal focus:ring-0! focus:ring-offset-0! focus-visible:ring-0! focus-visible:ring-offset-0! focus:border-liminal-secondary focus-visible:border-liminal-secondary transition-all h-auto outline-none! shadow-none",
                  interest === "placeholder"
                    ? "text-muted-foreground/40 font-light"
                    : "text-foreground font-normal",
                )}
              >
                <SelectValue placeholder="Select Project Type" />
              </SelectTrigger>
              <SelectContent
                position="popper"
                className="w-(--radix-select-trigger-width) rounded-2xl pb-1.5 border-border/50 bg-white/98 backdrop-blur-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] animate-in fade-in-0 zoom-in-95"
              >
                <SelectItem
                  value="placeholder"
                  disabled
                  className="py-3 px-5 text-sm font-light placeholder:text-muted-foreground/40 opacity-100"
                >
                  Select Project Type
                </SelectItem>

                {interests.map((interest) => (
                  <SelectItem
                    key={interest}
                    value={interest.toLowerCase().replace(/\s+/g, "-")}
                    className="py-2.5 pl-5 pr-12 text-sm font-light focus:bg-zinc-50 focus:text-liminal-secondary cursor-pointer rounded-xl transition-all duration-200"
                  >
                    {interest}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>

          {/* Budget/Timeline Field */}
          <Field className="space-y-4 group">
            <FieldLabel className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground group-focus-within:text-liminal-secondary transition-colors">
              Estimated Timeline
            </FieldLabel>
            <Input
              type="text"
              placeholder="e.g. 12-18 Months"
              className="w-full bg-transparent! border-t-0 border-x-0 border-b border-border/80 rounded-none p-0 pb-3 text-sm font-normal text-foreground focus-visible:ring-0 focus-visible:border-liminal-secondary transition-all placeholder:text-muted-foreground/40 placeholder:font-light h-auto"
            />
          </Field>
        </div>

        {/* Message Field */}
        <Field className="space-y-4 group">
          <FieldLabel className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground group-focus-within:text-liminal-secondary transition-colors">
            Project Vision & Brief
          </FieldLabel>
          <Textarea
            placeholder="Tell us about the space you imagine..."
            className="w-full bg-transparent! border-t-0 border-x-0 border-b border-border/80 rounded-none p-0 pb-4 text-sm font-normal text-foreground focus-visible:ring-0 focus-visible:border-liminal-secondary transition-all resize-none placeholder:text-muted-foreground/40 placeholder:font-light min-h-32"
            required
          />
        </Field>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 pt-3">
          <div className="">
            <button
              type="submit"
              className="group relative flex items-center gap-3 bg-liminal-secondary text-white px-8 py-5 cursor-pointer rounded-full overflow-hidden transition-all hover:shadow-2xl hover:shadow-liminal-secondary/40 active:scale-[0.98]"
            >
              <span className="relative z-10 font-bold uppercase tracking-[0.25em] text-[10px]">
                Transmit Inquiry
              </span>
              <ArrowRight
                size={16}
                className="relative z-10 transition-transform group-hover:translate-x-1.5"
                strokeWidth={2}
              />
              {/* Glossy Overlay */}
              <div className="absolute inset-0 bg-linear-to-r from-white/0 via-white/15 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
            </button>
          </div>

          {/* Privacy Policy */}
          <p className="text-[11.5px] text-muted-foreground/60 leading-relaxed max-w-xs italic font-light">
            By submitting this inquiry, you acknowledge that your data will be
            handled in accordance with our high-security privacy protocols.
          </p>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
