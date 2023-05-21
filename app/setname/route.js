import { kv } from "@vercel/kv";
import { NextResponse } from 'next/server';

export async function POST(request){
  const data=await request.json();
  var myStr=data.x+'*'+data.y
  const a=await kv.set(data.word,myStr)
  return NextResponse.json({ done: 0});
}
