import { kv } from "@vercel/kv";
import { NextResponse } from 'next/server';

export default async function handler(req,res) {
  const data=await req.json();
  
  const a=await kv.set(data.word,'hello');
  return NextResponse.json({ done: 0});
}
