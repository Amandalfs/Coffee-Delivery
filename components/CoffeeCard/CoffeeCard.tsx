import Image from "next/image";
import { Tag } from "../Tag/Tag";
import { InputNumber } from "../InputNumber/InputNumber";
import { PurchaseButton } from "../PurchaseButton/PurchaseButton";
import coffeeImg from "../../assets/imgs/Coffee-Test.svg";

export function CoffeeCard(){
    return <div className="
        flex flex-col items-center text-center
        my-5 
        mx-5
    ">
        <Image className="pb-3" src={coffeeImg} height={120} width={120} alt="coffee" />
        <div className="flex justify-center pb-4">
            <Tag>Tradicional</Tag>
        </div>
        <h1 className="pb-2 text-size-title-S font-bold font-title leading-tight text-base-subtitle"> 
            Expresso Tradicional
        </h1>
        <p className="
            text-size-text-S font-regular font-base leading-regular text-base-label
            w-48
            h-9
            mb-8
            ">
            O tradicional café feito com água quente e grãos moídos
        </p>
        <div className="flex w-52 h-10 items-center justify-between">
            <p
                className="
                    text-size-text-S font-medium font-base leading-tight
                    text-base-text
                "
            >
                R$ <span className="font-title font-extrabold text-size-title-M leading-tight">9,90</span>
            </p>
            <div className="flex gap-2 items-center justify-center">
                <InputNumber />
                <PurchaseButton/>
            </div>
        </div>
    </div>
}