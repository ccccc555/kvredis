import { kv } from "@vercel/kv";
import { NextResponse } from 'next/server';

export async function POST(){
  const data=await request.json();
  
  const a=await kv.set('cam','hello');
  return NextResponse.json({ done: 0});
}
