interface CoffeeDetail {
    id: number;
    name: string;
    description: string;
    image: string;
    price: number;
    tags: string[];
}

export interface Coffees {
    coffees: CoffeeDetail[];
}