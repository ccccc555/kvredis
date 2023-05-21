import { kv } from "@vercel/kv";
import { NextResponse } from 'next/server';

export default async function handler(req,res) {
   await kv.set('new','hello')
  res.status(200).json({ done: 0});
}
