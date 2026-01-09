import * as React from "react"
import { SVGProps } from "react"

const TimerIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <path
      fill="#574F4D"
      d="M13 2h6a1 1 0 1 0 0-2h-6a1 1 0 1 0 0 2ZM16 4a12 12 0 1 0 12 12A12.025 12.025 0 0 0 16 4Zm5.663 7.762-4.95 4.95a1.025 1.025 0 0 1-1.426 0 1.012 1.012 0 0 1 0-1.425l4.95-4.95a1.015 1.015 0 0 1 1.5-.073 1.014 1.014 0 0 1-.074 1.498Z"
    />
  </svg>
)
export default TimerIcon
