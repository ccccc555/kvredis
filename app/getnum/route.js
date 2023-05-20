import { kv } from "@vercel/kv";
import { NextResponse } from 'next/server';

export async function GET() {
  var ab= await kv.incr('abc')
  var num=await kv.incr('views')
  return NextResponse.json({ nmber: num, ac: ab});
}
