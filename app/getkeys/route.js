import { kv } from "@vercel/kv";
import { NextResponse } from 'next/server';

export async function GET() {
 var kys=await kv.keys('*')
 var len=kys.length
 return NextResponse.json({ ks: kys, le: len});
}
