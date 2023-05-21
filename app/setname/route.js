import { kv } from "@vercel/kv";
import { NextResponse } from 'next/server';

export async function POST() {
  const a=await kv.set(body,'hello');
  return NextResponse.json({ done: 0});
}
