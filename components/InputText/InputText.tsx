import { InputHTMLAttributes } from "react";
import { Input } from "../ui/input";
import clsx from "clsx";

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
    isOptional?: boolean    
}

export function InputText({isOptional, ...rest}: InputTextProps) {
  return (
    <div className="relative w-96 group">
      <Input
        {...rest}
        className={clsx(`
          bg-base-input border-base-button border-2 
          placeholder:text-base-label
          placeholder:text-size-text-S 
          placeholder:font-normal
          placeholder:font-base
          placeholder:leading-tight
          transition-colors
          h-11 pr-20 
          
          focus-visible:ring-0    
          focus-visible:ring-offset-0
          focus-visible:border-product-yellow-dark

          text-base-text
          text-size-text-S
          font-normal
          font-base
          `, rest.className)}
      />
      
      {isOptional && <span 
        className="
        absolute right-3 top-1/2 -translate-y-1/2 

        text-base-label 
        italic
        font-base
        font-normal
        text-size-button-M
        leading-tight

        pointer-events-none 
        select-none
        "
      >
        Opcional
      </span>}
    </div>
  )
}