import * as React from "react"
import { SVGProps } from "react"

const PlusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <path
      fill="#574F4D"
      fillRule="evenodd"
      d="M3.5 16A1.5 1.5 0 0 1 5 14.5h22a1.5 1.5 0 0 1 0 3H5A1.5 1.5 0 0 1 3.5 16Z"
      clipRule="evenodd"
    />
    <path
      fill="#574F4D"
      fillRule="evenodd"
      d="M16 3.5A1.5 1.5 0 0 1 17.5 5v22a1.5 1.5 0 0 1-3 0V5A1.5 1.5 0 0 1 16 3.5Z"
      clipRule="evenodd"
    />
  </svg>
)
export default PlusIcon
