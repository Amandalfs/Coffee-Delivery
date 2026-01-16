"use client";
import { ButtonHTMLAttributes } from "react";
import ShoppingCartIcon from "../Icons/ShoppingCartIcon";
import clsx from "clsx";
import { useCartStore } from "@/store/useCartStore";
import { useHasMounted } from "@/hooks/useHasMounted";

interface MyCartButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function MyCartButton({ ...rest }: MyCartButtonProps) {
    const quantity = useCartStore((state) => state.totalItems());
    
    const hasMounted = useHasMounted();

    return (
        <div className="relative w-12 h-12 flex items-center justify-center">
            <button
                className={clsx(
                    "w-10 h-10 bg-product-yellow-light rounded-[5px] justify-center items-center flex transition-colors",
                    rest.className
                )}
            >
                <ShoppingCartIcon className="fill-product-yellow-dark w-5 h-5" />
            </button>

            {hasMounted && quantity > 0 && (
                <div className="absolute bg-product-yellow-dark rounded-full size-5 flex items-center justify-center -top-1 -right-1 text-size-text-XS font-bold font-base leading-tight text-white">
                    {quantity}
                </div>
            )}
        </div>
    );
}