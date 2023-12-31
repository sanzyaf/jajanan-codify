import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { sign } from "jsonwebtoken";
import prisma from "@/utils/prisma";

export async function POST(req) {
  const { email, password } = await req.json();

  try {
    const findUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    // Jika user tidak ditemukan, kirim pesan error
    if (!findUser) {
      return NextResponse.json({ errorMessage: "User not found" }, { status: 404 });
    }

    // Bandingkan password yang diinput dengan password di database
    const comparePassword = await bcrypt.compare(password, findUser.password);

    // Jika password tidak cocok, kirim pesan error
    if (!comparePassword) {
      return NextResponse.json({ errorMessage: "Invalid Credentials" }, { status: 401 });
    }

    // Jika password cocok, kirim data user
    const payload = {
      id: findUser.id,
      username: findUser.username,
      email: findUser.email,
      location: findUser.location,
      about: findUser.about,
      avatar: findUser.avatar,
      qrisBarcode: findUser.qrisBarcode,
    };

    // Buat token
    const token = sign(payload, process.env.JWT_SECRET, { expiresIn: "7d" });
    const res = NextResponse.json({ data: payload, message: "Login succesfully" }, { status: 200 });
    res.cookies.set("token", token);

    return res;
  } catch (error) {
    console.log(error);
    return NextResponse.json({ errorMessage: "Something went wrong. Please try again later" }, { status: 500 });
  }
}
