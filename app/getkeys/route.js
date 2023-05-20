import { kv } from "@vercel/kv";
import { NextResponse } from 'next/server';

export async function GET() {
 var keys=await kv.keys('*')
 var len=keys.length
 return NextResponse.json({ ks: keys, le: len});
}
