import { kv } from "@vercel/kv";
import { NextResponse } from 'next/server';

export async function POST() {
   await kv.set('new')
  return NextResponse.json({ done: 0});
}
