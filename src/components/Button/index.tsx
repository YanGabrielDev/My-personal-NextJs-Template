import { ComponentProps, ReactNode } from "react"
import { tv, VariantProps } from "tailwind-variants"

const button = tv({
  base: [
    "flex",
    "items-center",
    "active:scale-50",
    "transition duration-100 ease-in-out",
    "rounded",
    "text-primary-700",
    "px-4",
    "py-2",
    "hover:bg-blue-600",
    "gap-2",
    "outline-none",
    "border-none"
  ],
  variants: {
    size: {
      default: "h-8 px-5 py-2",
      sm: "px-3 py-2",
      xs: "px-2 text-xs",
    },
    intent: {
      primary: ["bg-primary-700", "text-white", "hover:bg-primary-500"],
      success: ["bg-success-600", "text-white", "hover:bg-success-200", "hover:text-white"],
    },
  },
  defaultVariants: {
    size: "default",
  },
})

export type ButtonProps = ComponentProps<"button"> &
  VariantProps<typeof button> & {
    children: ReactNode
  }
export const Button = ({ children, className, size, intent, ...props }: ButtonProps) => {
  return (
    <button {...props} className={button({ className, intent, size })}>
      {children}
    </button>
  )
}
