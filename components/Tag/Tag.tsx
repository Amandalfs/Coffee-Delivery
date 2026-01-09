import { ReactNode } from "react"

interface TagProps {
    children: ReactNode
}

export function Tag({ children }: TagProps){
    return <p
        className="
        bg-product-yellow-light text-product-yellow-dark rounded-full
        h-5
        inline-flex items-center justify-center w-fit
        px-2
        text-size-tag font-bold font-base leading-tight
        uppercase
    "
    >{children}</p>
}