import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { Button } from "../ui/button";

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode; 
}

export function PrimaryButton({children, ...rest}: PrimaryButtonProps){
    return (<Button
        className="bg-product-yellow hover:bg-product-yellow-dark 
        "
        {...rest}
    >
        <p className="text-white text-size-button-G font-serif leading-[160%] font-bold">
            {children}
        </p>
    </Button>)
}