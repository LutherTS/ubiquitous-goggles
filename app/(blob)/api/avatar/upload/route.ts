import { put } from "@vercel/blob";
import { NextResponse } from "next/server";

export async function POST(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const filename = searchParams.get("filename");

  // Adding "!"'s so that filename and request can't be seen as null
  const blob = await put(filename!, request.body!, {
    access: "public",
    // addRandomSuffix: true, // that's the default
    addRandomSuffix: false,
  });

  return NextResponse.json(blob);
}
