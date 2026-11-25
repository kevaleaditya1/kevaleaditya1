import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f3a681] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        accent: "bg-[#f3a681] text-[#17100d] hover:bg-[#ffc3a5]",
        glass: "border border-white/15 bg-white/[0.06] text-white hover:bg-white/[0.11]",
        quiet: "text-[#d5ccc8] hover:bg-white/[0.06] hover:text-white",
      },
      size: {
        default: "h-10 px-4 text-sm",
        lg: "h-12 px-6 text-sm",
        sm: "h-8 px-3 text-xs",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "accent",
      size: "default",
    },
  },
);

type ButtonProps = ComponentProps<typeof ButtonPrimitive> &
  VariantProps<typeof buttonVariants>;

function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <ButtonPrimitive
      nativeButton={props.render ? false : undefined}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { Button, buttonVariants };
