"use client"
import MinusIcon from "../Icons/MinusIcon";
import PlusIcon from "../Icons/PlusIcon";

interface InputNumberProps{
    value: number;
    onChangeValue: (value: number) => void;
}

export function InputNumber({ value, onChangeValue }: InputNumberProps) {
    return (<div className="flex w-20 h-8 justify-center items-center bg-base-button gap-1 rounded-[5px]">
        <MinusIcon className="fill-product-purple hover:fill-product-purple-dark size-4"
            onClick={()=> {
                const newValue = value > 1 ? value-1 : 1
                onChangeValue(newValue);
            }}
        />
        <p className="text-base-title font-medium font-base text-size-text-M leading-tight">
            {value ?? 1}
        </p>
        <PlusIcon className="fill-product-purple hover:fill-product-purple-dark size-4" 
            onClick={()=> {
                const newValue = value + 1;
                onChangeValue(newValue);
            }}   
        />
    </div>)
}
