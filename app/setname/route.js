import { kv } from "@vercel/kv";
import { NextResponse } from 'next/server';

export async function GET() {
  const a=await kv.set('new','hello');
  return NextResponse.json({ done: 0});
}
