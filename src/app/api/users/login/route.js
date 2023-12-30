import prisma from "@/utils/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { sign } from "jsonwebtoken";

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
      return NextResponse.json(
        { errorMessage: "User not found" },
        { status: 404 }
      );
    }

    // Bandingkan password yang diinput dengan password di database
    console.log('Input String: ',password);
    console.log('storedHashing: ',findUser.password);
    const comparePassword = await bcrypt.compare(password, findUser.password);

    // Jika password tidak cocok, kirim pesan error
    if (!comparePassword) {
      return NextResponse.json(
        { errorMessage: "Invalid Credentials" },
        { status: 401 }
      );
    }

    // // Jika user belum verifikasi, kirim pesan error
    // if (!findUser.verified) {
    //   return NextResponse.json(
    //     { errorMessage: "Please verify your account first" },
    //     { status: 401 }
    //   );
    // }

    // Jika password cocok dan user ditemukan, kirim data user dengan token
    const payload = {
      id: findUser.id,
      username: findUser.username,
      email: findUser.email,
    };
    console.log('payload: ', payload);
    // Buat token
    const token = sign(payload, process.env.JWT_SECRET, { expiresIn: '7d' });
const secretKey = process.env.JWT_SECRET;
console.log('Key usage:', secretKey);
console.log('Created Token:', token);

// Include the token in the response data
const responseData = {
  ...payload,
  accessToken: token, // Add the access token to the response data
};

const res = NextResponse.json(
  { data: responseData, message: 'Login successfully' },
  { status: 200 }
);

// Set the token as a cookie in the response
res.cookies.set('accessToken', token, {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'strict',
  path: '/',
  maxAge: 60 * 60 * 24 * 7, // 7 days, adjust as needed
});

return res;
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { errorMessage: "Something went wrong. Please try again later" },
      { status: 500 }
    );
  }
}
