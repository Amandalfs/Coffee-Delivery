import Image from "next/image";
import bannerHeroImg from "../../assets/imgs/BannerHero.svg";
import ShoppingCartIcon from "../Icons/ShoppingCartIcon";
import TimerIcon from "../Icons/TimerIcon";
import PackageIcon from "../Icons/PackageIcon";
import CoffeeIcon from "../Icons/CoffeeIcon";

export function Hero(){
    return <section className="w-full flex items-center justify-center gap-4 py-20">
        <div className="flex flex-col gap-16">
            <div className="flex flex-col gap-4">
                <h1 className="
                    text-size-title-XL 
                    font-title 
                    font-extrabold 
                    leading-tight 
                    text-start
                    text-base-title
                    ">
                        Encontre o café perfeito para qualquer hora do dia
                </h1>
                <p className="
                    text-size-text-L 
                    font-base 
                    leading-relaxed
                    text-start 
                    text-base-subtitle max-w-lg
                    ">
                        Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
                </p>
            </div>
           

            <div className="flex gap-10">
                <div className="flex flex-col gap-5">
                    <div className="flex items-center gap-3">
                        <div className="flex bg-product-yellow-dark size-8 justify-center items-center rounded-full">
                            <ShoppingCartIcon className="fill-white size-3.5"/>
                        </div>
                        <p className="text-base-text text-size-text-M leading-base font-base font-medium">Compra simples e segura</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="flex bg-product-yellow size-8 justify-center items-center rounded-full">
                            <TimerIcon className="fill-white size-3.5"/>
                        </div>
                        <p className="text-base-text text-size-text-M leading-base font-base font-medium">
                            Entrega rápida e rastreada
                        </p>
                    </div> 
                </div>
                <div className="flex flex-col gap-5">
                    <div className="flex items-center gap-3">
                        <div className="flex bg-base-text size-8 justify-center items-center rounded-full">
                            <PackageIcon className="fill-white size-3.5"/>
                        </div>
                        <p className="text-base-text text-size-text-M leading-base font-base font-medium">
                            Embalagem mantém o café intacto
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="flex bg-product-purple size-8 justify-center items-center rounded-full">
                            <CoffeeIcon className="fill-white size-3.5"/>
                        </div>
                        <p className="text-base-text text-size-text-M leading-base font-base font-medium">
                            O café chega fresquinho até você
                        </p>
                    </div>
                </div>
                
            </div>
        </div>
        <Image src={bannerHeroImg} width={476} height={360} alt=""></Image>
    </section>
}  