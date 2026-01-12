import { promises as fs } from 'fs';
import { NextResponse } from 'next/server';
import path from 'path';
import { Coffees } from './AllCoffees.dto';

interface ErrorResponse {
  error: string;
}

export async function GET(_: unknown): Promise<NextResponse<Coffees | ErrorResponse>> {
  try {
    const filePath = path.resolve(process.cwd(), `app/database/database.json`);
    const data = await fs.readFile(filePath, 'utf8');
    const fileDatabase = JSON.parse(data)
    
    return NextResponse.json({ coffees: fileDatabase.Coffees }, { status: 200})

  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: 'Failed to load data' }, { status: 500 });
  }
}