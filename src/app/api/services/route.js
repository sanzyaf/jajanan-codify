import { NextResponse } from "next/server";
import prisma from "@/utils/prisma";
import { uploadFile } from "@/lib/uploadFile";
import slugify from "slugify";

export async function GET(req) {
  const searchParams = req.nextUrl.searchParams;
  const query = searchParams.get("query");

  try {
    if (query) {
      const searchService = await prisma.service.findMany({
        where: {
          title: {
            contains: query,
            mode: "insensitive",
          },
        },
      });

      return NextResponse.json({ data: searchService, message: "success" });
    }

    const allService = await prisma.service.findMany();
    return NextResponse.json({ data: allService, message: "success" });
  } catch (error) {
    console.log(error);
    return NextResponse.error({ message: "something went wrong" });
  }
}

export async function POST(req) {
  const formData = await req.formData();

  const title = formData.get("title");
  const description = formData.get("description");
  const location = formData.get("location");
  const price = formData.get("price");
  const isActive = formData.get("isActive");
  const authorId = formData.get("authorId");

  try {
    const createService = await prisma.service.create({
      data: {
        title,
        slug: slugify(title, { lower: true }),
        description,
        location,
        price: Number(price),
        isActive: isActive === "true" ? true : false,
        authorId,
      },
    });

    return NextResponse.json({
      data: createService,
      message: "Service Created Success",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      error: "Something went wrong",
    });
  }
}
