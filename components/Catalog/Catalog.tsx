import { CoffeeCard } from "../CoffeeCard/CoffeeCard";
import { Coffees } from "./AllCoffees.dto";

export async function Catalog(){
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    
    const response = await fetch(`${apiUrl}/api/coffees`, {
        method: "GET",
    })
    const { coffees } = await response.json() as  Coffees;


    return <section className="flex flex-col gap-9 w-full ">
        <h1 className="text-size-title-L font-extrabold font-title leading-tight">Nosso Café</h1>
        <div className="flex w-full flex-wrap justify-start ">
            {
                coffees.map(coffee => (
                    <CoffeeCard 
                        key={coffee.id} 
                        name={coffee.name} 
                        description={coffee.description}    
                        image={coffee.image}
                        price={coffee.price}
                        tags={coffee.tags}
                    />
                ))
            }
        </div>
    </section>
}