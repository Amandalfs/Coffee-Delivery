import { promises as fs } from 'fs';
import { NextResponse } from 'next/server';
import path from 'path';
import { CoffeeDetail } from '../ICoffeeDetail';
import { FindCoffeeById } from './FindCoffeeById.dto';

interface Params {
  id: string;
}

interface ErrorResponse {
  error: string;
}

export async function GET(_: unknown, { params }: { params: Promise<Params> }): Promise<NextResponse<FindCoffeeById | ErrorResponse>> { 
    try {
         const id = Number((await params).id);
    
        const filePath = path.resolve(process.cwd(), `app/database/database.json`);
        const data = await fs.readFile(filePath, 'utf8');
        const fileDatabase = JSON.parse(data)
        console.log(fileDatabase)

        const coffee = fileDatabase.Coffees.find((coffee: CoffeeDetail)=> {
            return coffee.id === id
        })

        if(!coffee){ 
            return NextResponse.json({ error: 'Coffee not found' }, { status: 404 });
        }

        return NextResponse.json({ coffee }, { status: 200})
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: 'Failed to load data' }, { status: 500 });    
    }
   
}