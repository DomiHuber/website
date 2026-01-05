import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80 px-2.5 py-0.5 text-xs font-semibold",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 px-2.5 py-0.5 text-xs font-semibold",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80 px-2.5 py-0.5 text-xs font-semibold",
        outline: "text-foreground px-2.5 py-0.5 text-xs font-semibold",
        // Hero badge - larger, for hero sections
        hero: "border-0 bg-swiss-blue/10 px-4 py-2 text-sm font-medium",
        // Tag pill - blue variant - stronger background for visibility
        tagBlue: "border-0 bg-[#e6f5fd] hover:bg-[#cceafb] px-3 py-1 text-xs font-medium rounded-full",
        // Tag pill - gray variant
        tagGray: "border-0 bg-gray-100 text-gray-700 hover:bg-gray-200 px-3 py-1 text-xs font-medium",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, children, ...props }: BadgeProps) {
  // For tagBlue variant, wrap children in span to preserve background while text has gradient
  if (variant === 'tagBlue') {
    return (
      <div className={cn(badgeVariants({ variant }), className)} {...props}>
        <span className="swiss-blue-gradient-text">{children}</span>
      </div>
    )
  }
  
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props}>
      {children}
    </div>
  )
}

export { Badge, badgeVariants }
