import Logo from "../Icons/Logo";
import MapPinIcon from "../Icons/MapPinIcon";
import { MyCartButton } from "../MyCartButton/MyCartButton";
import Link from "next/link";

export function Header(){
    return <header className="fixed py-8 flex items-center justify-between z-10 bg-white left-0 right-0 mx-40">
        
        <Link href="/">
            <Logo className="w-20 h-10"/>
        </Link>
        <div className="flex justify-center items-center gap-2">
            <div className="flex bg-product-purple-light px-2 py-2 rounded-md  gap-2 items-center">
                <MapPinIcon className="fill-product-purple" />
                <h1 className="text-product-purple-dark text-size-text-S leading-tight font-medium font-base">Jundiaí - Sp</h1>
            </div>
            <Link href={"/checkout"}>
                <MyCartButton />
            </Link>
        </div>
    </header>
}