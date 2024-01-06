import prisma from "@/utils/prisma";
import { NextResponse } from "next/server";

export async function GET(req) {
  const searchParams = req.nextUrl.searchParams;
  const serviceId = searchParams.get("serviceId");

  try {
    const findOffers = await prisma.offer.findMany({
      where: {
        serviceId,
      },
    });

    return NextResponse.json({ message: "Offers found", data: findOffers });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Offers fetch error" });
  }
}

export async function POST(req) {
  const { offerPrice, serviceId, authorId } = await req.json();

  try {
    const createOffer = await prisma.offer.create({
      data: {
        offerPrice: Number(offerPrice),
        serviceId,
        authorId,
      },
    });

    return NextResponse.json({ message: "Offer created", data: createOffer });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Offer creation failed" });
  }
}

export async function PATCH(req) {
  const { offerId } = await req.json();

  try {
    const updateOffer = await prisma.offer.update({
      where: {
        id: offerId,
      },
      data: {
        isAccepted: true,
      },
    });

    return NextResponse.json({ message: "Offer updated", data: updateOffer });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Offer update failed" });
  }
}
