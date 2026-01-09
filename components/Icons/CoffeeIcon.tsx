import * as React from "react"
import { SVGProps } from "react"

const CoffeeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <path
      fill="#574F4D"
      d="M10 7V3a1 1 0 0 1 2 0v4a1 1 0 0 1-2 0Zm5 1a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1Zm4 0a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1Zm12 7v1a5 5 0 0 1-4.688 4.988A12.25 12.25 0 0 1 22.938 26H26a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2h3.063A12.05 12.05 0 0 1 3 17v-6a1 1 0 0 1 1-1h22a5 5 0 0 1 5 5Zm-2 0a3 3 0 0 0-2-2.825V17c0 .628-.05 1.255-.15 1.875A3 3 0 0 0 29 16v-1Z"
    />
  </svg>
)
export default CoffeeIcon
