import { MapPin } from "lucide-react";
import Logo from "../Icons/Logo";
import { MyCartButton } from "../MyCartButton/MyCartButton";

export function Header(){
    return <header className="fixed py-8 flex items-center justify-between z-10 bg-white left-0 right-0 mx-40">
        <Logo className="w-20 h-10"/>
        <div className="flex justify-center items-center gap-2">
            <div className="flex bg-product-purple-light px-2 py-2 rounded-md  gap-2 items-center">
                <MapPin />
                <h1 className="text-product-purple-dark text-size-text-S leading-tight font-medium font-base">Jundiaí - Sp</h1>
            </div>
            <MyCartButton />
        </div>
    </header>
}