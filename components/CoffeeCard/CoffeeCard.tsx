"use client"
import Image from "next/image";
import { Tag } from "../Tag/Tag";
import { InputNumber } from "../InputNumber/InputNumber";
import { PurchaseButton } from "../PurchaseButton/PurchaseButton";
import { useState } from "react";

interface CoffeeCardProps {
    name: string;
    description: string;
    image: string;
    price: number;
    tags: string[];
}

export function CoffeeCard({ name, description, image, price, tags }: CoffeeCardProps){
    const [quantity, setQuantity] = useState(1);

    function handleQuantityChange(newQuantity: number){
        setQuantity(newQuantity);
    }

    return <div className="
        flex flex-col items-center text-center
        my-5 
        mx-5
    ">
        <Image className="pb-3" src={image} height={120} width={120} alt="coffee" />
        <div className="flex justify-center pb-4">
            {
                tags.map((tag, index) => (
                    <Tag key={index}>
                        {tag}
                    </Tag>
                ))
            }
        </div>
        <h1 className="pb-2 text-size-title-S font-bold font-title leading-tight text-base-subtitle"> 
            {name}
        </h1>
        <p className="
            text-size-text-S font-regular font-base leading-regular text-base-label
            w-48
            h-9
            mb-8
            ">
            {description}
        </p>
        <div className="flex w-52 h-10 items-center justify-between">
            <p
                className="
                    text-size-text-S font-medium font-base leading-tight
                    text-base-text
                "
            >
                R$ <span className="font-title font-extrabold text-size-title-M leading-tight">{price}</span>
            </p>
            <div className="flex gap-2 items-center justify-center">
                <InputNumber onChangeValue={handleQuantityChange} value={quantity} />
                <PurchaseButton/>
            </div>
        </div>
    </div>
}