import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "yesinline-flex yesitems-center yesjustify-center yeswhitespace-nowrap yesrounded-md yestext-sm yesfont-medium yestransition-colors focus-visible:yesoutline-none focus-visible:yesring-1 focus-visible:yesring-zinc-950 disabled:yespointer-events-none disabled:yesopacity-50 dark:focus-visible:yesring-zinc-300",
  {
    variants: {
      variant: {
        default:
          "yesbg-zinc-900 yestext-zinc-50 yesshadow hover:yesbg-zinc-900/90 dark:yesbg-zinc-50 dark:yestext-zinc-900 dark:hover:yesbg-zinc-50/90",
        destructive:
          "yesbg-red-500 yestext-zinc-50 yesshadow-sm hover:yesbg-red-500/90 dark:yesbg-red-900 dark:yestext-zinc-50 dark:hover:yesbg-red-900/90",
        outline:
          "yesborder yesborder-zinc-200 yesbg-white yesshadow-sm hover:yesbg-zinc-100 hover:yestext-zinc-900 dark:yesborder-zinc-800 dark:yesbg-zinc-950 dark:hover:yesbg-zinc-800 dark:hover:yestext-zinc-50",
        secondary:
          "yesbg-zinc-100 yestext-zinc-900 yesshadow-sm hover:yesbg-zinc-100/80 dark:yesbg-zinc-800 dark:yestext-zinc-50 dark:hover:yesbg-zinc-800/80",
        ghost: "hover:yesbg-zinc-100 hover:yestext-zinc-900 dark:hover:yesbg-zinc-800 dark:hover:yestext-zinc-50",
        link: "yestext-zinc-900 yesunderline-offset-4 hover:yesunderline dark:yestext-zinc-50",
      },
      size: {
        default: "yesh-9 yespx-4 yespy-2",
        sm: "yesh-8 yesrounded-md yespx-3 yestext-xs",
        lg: "yesh-10 yesrounded-md yespx-8",
        icon: "yesh-9 yesw-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
