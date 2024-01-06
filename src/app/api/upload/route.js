import { uploadFile } from "@/lib/uploadFile";
import { NextResponse } from "next/server";

export async function POST(req) {
  const formData = await req.formData();
  const serviceId = formData.get("serviceId");
  const image = formData.get("image");

  try {
    const res = await uploadFile({
      Body: image,
      Key: image.name,
      ContentType: image.type,
      Dir: `services/${serviceId}`,
    });

    console.log(res);
    return NextResponse.json({ message: "Upload success" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Upload failed" });
  }
}
