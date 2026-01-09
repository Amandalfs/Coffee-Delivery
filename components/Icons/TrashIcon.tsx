import * as React from "react"
import { SVGProps } from "react"

const TrashIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <path
      fill="#574F4D"
      fillRule="evenodd"
      d="M4 7a1 1 0 0 1 1-1h22a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1ZM13 12a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0v-8a1 1 0 0 1 1-1ZM19 12a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0v-8a1 1 0 0 1 1-1Z"
      clipRule="evenodd"
    />
    <path
      fill="#574F4D"
      fillRule="evenodd"
      d="M7 6a1 1 0 0 1 1 1v19h16V7a1 1 0 1 1 2 0v19a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V7a1 1 0 0 1 1-1Z"
      clipRule="evenodd"
    />
    <path
      fill="#574F4D"
      fillRule="evenodd"
      d="M10.879 2.879A3 3 0 0 1 13 2h6a3 3 0 0 1 3 3v2a1 1 0 1 1-2 0V5a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v2a1 1 0 1 1-2 0V5a3 3 0 0 1 .879-2.121Z"
      clipRule="evenodd"
    />
  </svg>
)
export default TrashIcon
