import { kv } from "@vercel/kv";
import { NextResponse } from 'next/server';

export async function POST(request){
  const data=await request.json();
  
  const a=await kv.incr('cam')
  return NextResponse.json({ done: 0});
}
