import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--ring)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-40",
  {
    variants: {
      variant: {
        primary:
          "bg-[color:var(--ink)] text-white hover:bg-[color:var(--accent)] px-6 py-3",
        outline:
          "border border-[color:var(--ink)] bg-transparent text-[color:var(--ink)] hover:bg-[color:var(--ink)] hover:text-white px-6 py-3",
        ghost:
          "bg-transparent text-[color:var(--ink)] hover:bg-[color:var(--soft)] px-4 py-2",
        link: "p-0 underline-offset-4 hover:underline text-[color:var(--accent)]"
      }
    },
    defaultVariants: {
      variant: "primary"
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
