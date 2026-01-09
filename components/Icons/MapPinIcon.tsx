import * as React from "react"
import { SVGProps } from "react"

const MapPinIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <path
      fill="#574F4D"
      d="M16 2A11.013 11.013 0 0 0 5 13c0 9.413 10 16.525 10.425 16.825a1.038 1.038 0 0 0 1.15 0C17 29.525 27 22.413 27 13A11.012 11.012 0 0 0 16 2Zm0 7a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z"
    />
  </svg>
)
export default MapPinIcon
