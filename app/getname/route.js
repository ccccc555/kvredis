import { kv } from "@vercel/kv";
import { NextResponse } from 'next/server';

export async function POST(request){
  const data=await request.json();
  const a=await kv.get(data.word)
  const b=a.split('*')
  return NextResponse.json({ x: b[0], y: b[1] });
}
