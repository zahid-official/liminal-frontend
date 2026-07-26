import {
  Field,
  FieldContent,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import { DeliveryInfo, FormErrors } from "./types";

interface StepDeliveryInfoProps {
  deliveryInfo: DeliveryInfo;
  setDeliveryInfo: React.Dispatch<React.SetStateAction<DeliveryInfo>>;
  errors: FormErrors;
}

const inputClass =
  "w-full bg-transparent! border-b border-border/50 focus:border-liminal-secondary focus:outline-none py-2 text-sm font-light transition-all duration-300 rounded-none h-10 border-t-0 border-x-0 focus-visible:border-liminal-secondary focus-visible:ring-liminal-secondary/15 text-foreground";

const textareaClass =
  "w-full min-h-24 bg-transparent! border-b border-border/50 focus:border-liminal-secondary focus:outline-none py-2 text-sm font-light transition-all duration-300 rounded-none resize-none border-t-0 border-x-0 focus-visible:border-liminal-secondary focus-visible:ring-liminal-secondary/15 text-foreground";

export const StepDeliveryInfo = ({
  deliveryInfo,
  setDeliveryInfo,
  errors,
}: StepDeliveryInfoProps) => {
  return (
    <div className="space-y-5">
      {/* Street Address */}
      <Field invalid={!!errors.address}>
        <FieldLabel htmlFor="address">Street Address</FieldLabel>
        <FieldContent>
          <Input
            id="address"
            value={deliveryInfo.address}
            onChange={(e) =>
              setDeliveryInfo((prev) => ({
                ...prev,
                address: e.target.value,
              }))
            }
            placeholder="e.g. House-12, Road-3, Sector-1, Uttara"
            className={inputClass}
          />
          {errors.address && <FieldError>{errors.address}</FieldError>}
        </FieldContent>
      </Field>

      {/* City & Zip Code */}
      <div className="grid grid-cols-2 gap-4">
        <Field invalid={!!errors.city}>
          <FieldLabel htmlFor="city">City</FieldLabel>
          <FieldContent>
            <Input
              id="city"
              value={deliveryInfo.city}
              onChange={(e) =>
                setDeliveryInfo((prev) => ({
                  ...prev,
                  city: e.target.value,
                }))
              }
              placeholder="e.g. Dhaka"
              className={inputClass}
            />
            {errors.city && <FieldError>{errors.city}</FieldError>}
          </FieldContent>
        </Field>

        <Field invalid={!!errors.zip}>
          <FieldLabel htmlFor="zip">Postal / ZIP Code</FieldLabel>
          <FieldContent>
            <Input
              id="zip"
              value={deliveryInfo.zip}
              onChange={(e) =>
                setDeliveryInfo((prev) => ({
                  ...prev,
                  zip: e.target.value,
                }))
              }
              placeholder="e.g. 1230"
              className={inputClass}
            />
            {errors.zip && <FieldError>{errors.zip}</FieldError>}
          </FieldContent>
        </Field>
      </div>

      {/* Delivery Instructions */}
      <Field>
        <FieldLabel htmlFor="notes">
          Delivery Instructions (Optional)
        </FieldLabel>
        <FieldContent>
          <Textarea
            id="notes"
            value={deliveryInfo.notes}
            onChange={(e) =>
              setDeliveryInfo((prev) => ({
                ...prev,
                notes: e.target.value,
              }))
            }
            placeholder="Include details regarding floor height, freight elevator or dimensional revisions."
            className={textareaClass}
          />
        </FieldContent>
      </Field>
    </div>
  );
};
