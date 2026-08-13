"use client";

import * as React from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export interface TagsInputProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "value" | "onChange"> {
  value?: string[] | string;
  onChange?: (value: string[] | string) => void;
  placeholder?: string;
  disabled?: boolean;
  delimiter?: string;
  asString?: boolean;
}

export const TagsInput = React.forwardRef<HTMLInputElement, TagsInputProps>(
  (
    {
      value,
      onChange,
      placeholder = "Add a tag...",
      disabled = false,
      delimiter = ",",
      asString = true,
      className,
      ...props
    },
    ref
  ) => {
    const [inputValue, setInputValue] = React.useState("");
    const inputRef = React.useRef<HTMLInputElement>(null);

    // Forward ref support
    React.useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

    // Parse current tags array from props
    const tags = React.useMemo(() => {
      if (!value) return [];
      if (Array.isArray(value)) return value;
      return value
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean);
    }, [value]);

    const updateTags = React.useCallback(
      (newTags: string[]) => {
        if (!onChange) return;
        if (asString) {
          onChange(newTags.join(", "));
        } else {
          onChange(newTags);
        }
      },
      [onChange, asString]
    );

    const addTag = React.useCallback(
      (textToAdd: string) => {
        const trimmed = textToAdd.trim();
        if (!trimmed) return;

        // Split by delimiter in case multiple comma-separated items were passed
        const itemsToAdd = trimmed
          .split(delimiter)
          .map((item) => item.trim())
          .filter(Boolean);

        if (itemsToAdd.length === 0) return;

        // Avoid exact duplicates
        const nextTags = [...tags];
        itemsToAdd.forEach((item) => {
          if (!nextTags.includes(item)) {
            nextTags.push(item);
          }
        });

        updateTags(nextTags);
        setInputValue("");
      },
      [tags, delimiter, updateTags]
    );

    const removeTag = React.useCallback(
      (indexToRemove: number) => {
        const nextTags = tags.filter((_, idx) => idx !== indexToRemove);
        updateTags(nextTags);
      },
      [tags, updateTags]
    );

    // Handle key press events (Comma, Enter, Backspace)
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (disabled) return;

      if (e.key === "," || e.key === "Enter") {
        e.preventDefault();
        e.stopPropagation();
        addTag(inputValue);
      } else if (e.key === "Backspace" && !inputValue && tags.length > 0) {
        e.preventDefault();
        removeTag(tags.length - 1);
      }
    };

    // Fallback for typing comma directly or composition engines
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = e.target.value;
      if (val.includes(delimiter)) {
        addTag(val);
      } else {
        setInputValue(val);
      }
    };

    // Support pasting multi-tag string
    const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
      const pasted = e.clipboardData.getData("text");
      if (pasted && pasted.includes(delimiter)) {
        e.preventDefault();
        addTag(pasted);
      }
    };

    return (
      <div
        data-slot="tags-input"
        onClick={() => inputRef.current?.focus()}
        className={cn(
          "flex min-h-10 w-full flex-wrap items-center gap-1.5 rounded-lg border border-input bg-transparent px-2.5 py-1.5 text-base transition-colors focus-within:border-ring focus-within:ring-3 focus-within:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-input/30",
          disabled && "pointer-events-none opacity-50",
          className
        )}
        {...props}
      >
        {tags.map((tag, index) => (
          <span
            key={`${tag}-${index}`}
            className="inline-flex h-6 shrink-0 items-center gap-1.5 rounded-md bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground border border-border/60 transition-all select-none"
          >
            <span>{tag}</span>
            {!disabled && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  removeTag(index);
                }}
                className="inline-flex size-3.5 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-foreground/15 hover:text-foreground focus-visible:outline-none"
                aria-label={`Remove tag ${tag}`}
              >
                <X className="size-3" />
              </button>
            )}
          </span>
        ))}

        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onPaste={handlePaste}
          onBlur={() => {
            if (inputValue.trim()) {
              addTag(inputValue);
            }
          }}
          disabled={disabled}
          placeholder={tags.length === 0 ? placeholder : ""}
          className="min-w-28 flex-1 bg-transparent py-0.5 text-foreground placeholder:text-muted-foreground outline-none border-none text-base md:text-sm"
        />
      </div>
    );
  }
);

TagsInput.displayName = "TagsInput";
