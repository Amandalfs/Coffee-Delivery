import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Button } from "../ui/button";
import TrashIcon from '../Icons/TrashIcon';
import clsx from 'clsx';

interface  SecondaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function SecondaryButton({children, ...rest}:  SecondaryButtonProps){
    return (<Button
        {...rest}
        className={clsx(`
             flex
            justify-center
            gap-1
            w-24
            h-8
            bg-base-button
            hover:bg-base-hover
            hover:text-base-subtitle    
        `, rest.className)}
    >
        <TrashIcon className="fill-product-purple size-4" />
        <p className="
            text-base-text
            text-size-button-S
            font-base
            font-medium
            leading-base 
        ">
            REMOVER
        </p>
    </Button>)
}