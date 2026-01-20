import React, { ButtonHTMLAttributes, ReactNode } from 'react';

import { Button } from "../ui/button";
import clsx from 'clsx';

interface SelectProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    iconImg?: string;
    isSelected?: boolean;
    children: ReactNode;
    onClick?: () => void;
}

const baseSelect = `
        flex
        bg-base-button text-base-text 
        hover:bg-base-hover hover:text-base-subtitle
        w-44
        h-12
        justify-start
        text-size-button-M
        font-normal
        leading-["160%"]
        uppercase
    `

export function SelectMethodPayment({children, isSelected, onClick }: SelectProps){
    return (<Button 
        className={clsx(baseSelect, isSelected ? "border-2 border-product-purple " : "")}
        onClick={onClick}
        >
        {children}
    </Button>)
}
