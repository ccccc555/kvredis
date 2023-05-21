import { kv } from "@vercel/kv";
import { NextResponse } from 'next/server';

export async function POST() {
   await kv.set('new','hello')
  return NextResponse.json({ done: 0});
}
