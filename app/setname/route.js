import { kv } from "@vercel/kv";
import { NextResponse } from 'next/server';

export default async function handler(req,res) {
  const a=await kv.set('new','hello');
  return NextResonse.json({ done: 0});
}
