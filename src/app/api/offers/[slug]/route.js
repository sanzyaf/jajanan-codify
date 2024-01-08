import { NextResponse } from "next/server";
import prisma from "@/utils/prisma";

export async function GET(req, { params }) {
  const { slug } = params;

  try {
    const findService = await prisma.offer.findFirst({
      where: {
        slug,
      },
    });

    return NextResponse.json({ message: "Service found", data: findOffer });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Offer fetch error" });
  }
}
