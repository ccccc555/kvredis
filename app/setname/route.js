import { kv } from "@vercel/kv";
import { NextResponse } from 'next/server';

export async function POST(request){
  const data=await request.json();
  
  const a=await kv.set('ccc',5)
  return NextResponse.json({ done: 0});
}
