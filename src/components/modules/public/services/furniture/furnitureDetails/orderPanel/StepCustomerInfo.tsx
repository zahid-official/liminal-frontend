import {
  Field,
  FieldContent,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import { IFurniture } from "../../furnitureData";
import { CustomerInfo, FormErrors } from "./types";
import { StatusNotice } from "./StatusNotice";

interface StepCustomerInfoProps {
  furniture: IFurniture;
  isOutOfStock: boolean;
  customerInfo: CustomerInfo;
  setCustomerInfo: React.Dispatch<React.SetStateAction<CustomerInfo>>;
  interestReason: string;
  setInterestReason: React.Dispatch<React.SetStateAction<string>>;
  errors: FormErrors;
}

const inputClass =
  "w-full bg-transparent! border-b border-border/50 focus:border-liminal-secondary focus:outline-none py-2 text-sm font-light transition-all duration-300 rounded-none h-10 border-t-0 border-x-0 focus-visible:border-liminal-secondary focus-visible:ring-liminal-secondary/15 text-foreground";

const textareaClass =
  "w-full min-h-24 bg-transparent! border-b border-border/50 focus:border-liminal-secondary focus:outline-none py-2 text-sm font-light transition-all duration-300 rounded-none resize-none border-t-0 border-x-0 focus-visible:border-liminal-secondary focus-visible:ring-liminal-secondary/15 text-foreground";

export const StepCustomerInfo = ({
  furniture,
  isOutOfStock,
  customerInfo,
  setCustomerInfo,
  interestReason,
  setInterestReason,
  errors,
}: StepCustomerInfoProps) => {
  return (
    <div className="space-y-6">
      {isOutOfStock && <StatusNotice furniture={furniture} />}

      <div className="space-y-6 pt-2">
        {/* Full Name */}
        <Field invalid={!!errors.name}>
          <FieldLabel htmlFor="name">Full Name</FieldLabel>
          <FieldContent>
            <Input
              id="name"
              value={customerInfo.name}
              onChange={(e) =>
                setCustomerInfo((prev) => ({
                  ...prev,
                  name: e.target.value,
                }))
              }
              placeholder="e.g. John Doe"
              className={inputClass}
            />
            {errors.name && <FieldError>{errors.name}</FieldError>}
          </FieldContent>
        </Field>

        {/* Email Address */}
        <Field invalid={!!errors.email}>
          <FieldLabel htmlFor="email">Email Address</FieldLabel>
          <FieldContent>
            <Input
              id="email"
              type="email"
              value={customerInfo.email}
              onChange={(e) =>
                setCustomerInfo((prev) => ({
                  ...prev,
                  email: e.target.value,
                }))
              }
              placeholder="john@example.com"
              className={inputClass}
            />
            {errors.email && <FieldError>{errors.email}</FieldError>}
          </FieldContent>
        </Field>

        {/* Phone Number (In Stock Flow) */}
        {!isOutOfStock && (
          <Field invalid={!!errors.phone}>
            <FieldLabel htmlFor="phone">Phone Number</FieldLabel>
            <FieldContent>
              <Input
                id="phone"
                value={customerInfo.phone}
                onChange={(e) =>
                  setCustomerInfo((prev) => ({
                    ...prev,
                    phone: e.target.value,
                  }))
                }
                placeholder="(+880) 100-0000"
                className={inputClass}
              />
              {errors.phone && <FieldError>{errors.phone}</FieldError>}
            </FieldContent>
          </Field>
        )}

        {/* Interest Reason (Out of Stock Flow) */}
        {isOutOfStock && (
          <Field invalid={!!errors.interestReason}>
            <FieldLabel htmlFor="reason">
              Why are you interested in this piece?
            </FieldLabel>
            <FieldContent>
              <Textarea
                id="reason"
                value={interestReason}
                onChange={(e) => setInterestReason(e.target.value)}
                placeholder="Let us know if you require a specific dimensions, or material variations."
                className={textareaClass}
              />
              {errors.interestReason && (
                <FieldError>{errors.interestReason}</FieldError>
              )}
            </FieldContent>
          </Field>
        )}
      </div>
    </div>
  );
};
