import { kv } from "@vercel/kv";
import { NextResponse } from 'next/server';

export async function POST {
  const data=await req.json();
  
  const a=await kv.set(data.word,'hello');
  return NextResponse.json({ done: 0});
}
