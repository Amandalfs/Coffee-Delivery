"use client";
import Image from "next/image";
import { InputNumber } from "../InputNumber/InputNumber";
import { SecondaryButton } from "../SecondaryButton/SecondaryButton";

interface CartItemCoffeeProps {
  name: string;
  image: string;
  price: number;
  quantity: number;
  onChangeQuantity: (value: number) => void;
  removeItem: () => void;
}

export function CartItemCoffee({ name, image, price, quantity, onChangeQuantity, removeItem }: CartItemCoffeeProps) {
  return (
    <div className="flex flex-wrap items-start justify-between gap-4 py-2 px-2 rounded-md mb-4 ">
      
      <div className="flex items-center gap-5 flex-1 min-w-50">
        <Image src={image} width={64} height={64} alt="Coffee" className="shrink-0" />
        
        <div className="flex flex-col gap-2 w-full">
          <h1 className="text-base-text text-size-text-M font-base font-medium leading-tight">
            {name}
          </h1>
          
          <div className="flex flex-wrap gap-2">
            <InputNumber value={quantity} onChangeValue={onChangeQuantity} />
            <SecondaryButton className="px-3 py-2 min-w-fit" 
              onClick={removeItem}
            />
          </div>
        </div>
      </div>


      <p className="text-size-text-M text-base-text leading-tight font-bold font-base  whitespace-nowrap">
        R$ {(price * quantity).toFixed(2).replaceAll(".", ",")}
      </p>
    </div>
  );
}