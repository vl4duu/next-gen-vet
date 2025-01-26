import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Link from "next/link"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        sunane: "border-2 border-blue-500",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  phoneNumber?: string
  isSelected?: boolean
  blueBorder?: boolean
  isSunane?: boolean
  href?: string
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      phoneNumber,
      isSelected = false,
      blueBorder = false,
      isSunane = false,
      href,
      children,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : href ? Link : phoneNumber ? "button" : Link
    href = href || "/contact"

    if (phoneNumber) {
      return (
        <Dialog>
          <DialogTrigger asChild>
            <Comp
              className={cn(
                buttonVariants({ variant, size, className }),
                "ml-auto text-orange-500 border-2 border-blue-500",
              )}
              ref={ref}
              {...props}
            >
              {children}
            </Comp>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Contact Options</DialogTitle>
              <DialogDescription>Choose how you'd like to contact us:</DialogDescription>
            </DialogHeader>
            <div className="flex flex-col space-y-4">
              <a href={`tel:${phoneNumber}`} className={cn(buttonVariants({ variant: "default" }), "w-full")}>
                Call {phoneNumber}
              </a>
              <a href={`facetime:${phoneNumber}`} className={cn(buttonVariants({ variant: "outline" }), "w-full")}>
                FaceTime {phoneNumber}
              </a>
            </div>
          </DialogContent>
        </Dialog>
      )
    }

    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, className }),
          "ml-auto",
          className?.includes("bg-orange-500") || className?.includes("bg-[#F4845F]")
            ? "text-white"
            : "text-orange-500",
        )}
        ref={ref}
        href={href}
        {...props}
      >
        {children}
      </Comp>
    )
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }

