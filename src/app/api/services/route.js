import { NextResponse } from "next/server";
import prisma from "@/utils/prisma";
import { uploadFile } from "@/lib/uploadFile";

export async function GET() {
  try {
    const allService = await prisma.service.findMany();
    return NextResponse.json({ data: allService, message: "success" });
  } catch (error) {
    console.log(error);
    return NextResponse.error({ message: "something went wrong" });
  }
}

export async function POST(req) {
  const body = await req.formData();
  const name = body.get("name");
  const description = body.get("description");
  const image = body.getAll("image");
  const price = body.get("price");
  const status = body.get("status");

  //upload image to s3
  // try {
  //   const uploadImage = await uploadFile({
  //     Body: image[0],
  //     Key: image[0].name,
  //     ContentType: image[0].type,
  //     Dir: "services",
  //   });
  // } catch (error) {
  //   console.log(error);
  // }

  //save to database
  try {
    const createAllService = await prisma.service.create({
      data: {
        name,
        description,
        image: image[0].name,
        price,
        status,
      },
    });

    serviceId = createAllService.id;
    console.log(createAllService);
  } catch (error) {
    console.log(error);
  }

  return NextResponse.json({
    data: { name, description, image, price, status },
    message: "Service Created Success",
  });
}
