import MinusIcon from "../Icons/MinusIcon";
import PlusIcon from "../Icons/PlusIcon";

export function InputNumber(){
    return (<div className="flex w-20 h-8 justify-center items-center bg-base-button gap-1 rounded-[5px]">
        <MinusIcon className="fill-product-purple hover:fill-product-purple-dark size-4" />
        <p className="text-base-title font-medium font-base text-size-text-M leading-tight">
            1
        </p>
        <PlusIcon className="fill-product-purple hover:fill-product-purple-dark size-4" />
    </div>)
}
