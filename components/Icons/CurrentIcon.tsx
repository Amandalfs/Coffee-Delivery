import * as React from "react"
import { SVGProps } from "react"

const CurrrentIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <path
      fill="#574F4D"
      fillRule="evenodd"
      d="M16 2a1 1 0 0 1 1 1v26a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1Z"
      clipRule="evenodd"
    />
    <path
      fill="#574F4D"
      fillRule="evenodd"
      d="M9.257 6.757A6 6 0 0 1 13.5 5H18a6 6 0 0 1 6 6 1 1 0 1 1-2 0 4 4 0 0 0-4-4h-4.5a4 4 0 1 0 0 8H19a6 6 0 1 1 0 12h-6a6 6 0 0 1-6-6 1 1 0 1 1 2 0 4 4 0 0 0 4 4h6a4 4 0 1 0 0-8h-5.5A6 6 0 0 1 9.257 6.757Z"
      clipRule="evenodd"
    />
  </svg>
)
export default CurrrentIcon
