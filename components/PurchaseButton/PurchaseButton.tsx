import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Button } from "../ui/button";
import ShoppingCartIcon from '../Icons/ShoppingCartIcon';

interface  PurchaseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function PurchaseButton({children, ...rest}:  PurchaseButtonProps){
    return (<Button
        className="
        flex
        justify-center
        gap-1
        w-10
        h-10
        bg-product-purple-dark
        hover:bg-product-purple
        hover:text-base-subtitle
        "
        {...rest}
    >
        <ShoppingCartIcon className="fill-base-card size-5" />
    </Button>)
}