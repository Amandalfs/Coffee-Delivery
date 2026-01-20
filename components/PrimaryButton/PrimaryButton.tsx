import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { Button } from "../ui/button";

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function PrimaryButton({children, ...rest}: PrimaryButtonProps){
    return (<Button
        className="bg-product-yellow hover:bg-product-yellow-dark w-full
        "
        {...rest}
    >
        <p className="text-white text-size-button-G font-base leading-base font-bold">
            {children}
        </p>
    </Button>)
}