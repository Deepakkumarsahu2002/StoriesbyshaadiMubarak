import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 font-body tracking-wide",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        // Luxury gold variants
        gold: "bg-gradient-to-r from-gold to-gold-dark text-primary-foreground hover:shadow-[0_0_30px_hsla(45,80%,55%,0.4)] hover:scale-[1.02] active:scale-[0.98] rounded-sm",
        "gold-outline": "border-2 border-gold text-gold hover:bg-gold hover:text-primary-foreground rounded-sm",
        "gold-ghost": "text-gold hover:bg-gold/10 hover:text-gold-light rounded-sm",
        luxury: "bg-card border border-gold/50 text-foreground hover:border-gold hover:shadow-[0_0_20px_hsla(45,80%,55%,0.2)] rounded-sm",
        hero: "bg-gradient-to-r from-gold to-gold-dark text-primary-foreground text-base px-8 py-6 hover:shadow-[0_0_40px_hsla(45,80%,55%,0.5)] hover:scale-[1.03] active:scale-[0.98] uppercase tracking-widest rounded-sm",
        "hero-outline": "border-2 border-gold/80 text-gold bg-transparent text-base px-8 py-6 hover:bg-gold/10 hover:border-gold uppercase tracking-widest rounded-sm",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-14 rounded-md px-10 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
