import * as React from "react"
import { SVGProps } from "react"

const MapPinLineIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <path
      fill="#574F4D"
      fillRule="evenodd"
      d="M6 29a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1ZM16 10a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
      clipRule="evenodd"
    />
    <path
      fill="#574F4D"
      fillRule="evenodd"
      d="M16 4a9 9 0 0 0-9 9c0 4.14 2.312 7.91 4.755 10.719A31.529 31.529 0 0 0 16 27.75a31.529 31.529 0 0 0 4.245-4.031C22.688 20.909 25 17.139 25 13a9 9 0 0 0-9-9Zm0 25c-.573.82-.574.819-.574.819l-.003-.002-.008-.006-.025-.018a19.38 19.38 0 0 1-.427-.317c-.286-.218-.69-.538-1.173-.948a33.528 33.528 0 0 1-3.545-3.497C7.688 22.091 5 17.861 5 13a11 11 0 1 1 22 0c0 4.86-2.688 9.09-5.245 12.031a33.528 33.528 0 0 1-3.545 3.497 29.334 29.334 0 0 1-1.508 1.199l-.092.066-.025.018-.008.006-.002.001c-.001.001-.002.001-.575-.818Zm0 0 .573.82a1 1 0 0 1-1.146 0L16 29Z"
      clipRule="evenodd"
    />
  </svg>
)
export default MapPinLineIcon
