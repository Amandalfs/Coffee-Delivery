import { CoffeeCard } from "../CoffeeCard/CoffeeCard";

export function Catalog(){
    return <section className="flex flex-col gap-9 w-full">
        <h1 className="text-size-title-L font-extrabold font-title leading-tight">Nosso Café</h1>
        <div className="flex w-full flex-wrap gap-8 justify-start ">
            {
                [1,2,3,4,5,6,7,8,9.10,11,12,13].map((_, index) => (
                    <CoffeeCard key={index} />
                ))
            }
        </div>
    </section>
}