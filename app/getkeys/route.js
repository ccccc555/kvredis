import { kv } from "@vercel/kv";
import { NextResponse } from 'next/server';

export sync function GET() {
 var keys=kv.keys('*')
 return NextResponse.json({ ks: keys});
}
