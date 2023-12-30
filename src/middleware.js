import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { decode } from 'jsonwebtoken';

export default async function middleware(req) {
  const token = req.cookies.get('accessToken')?.value;
  console.log('token in middleware: ', token);
  if (!token) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  try {
    const secretKey = process.env.JWT_SECRET;
    const decoded = jwt.verify(token, secretKey);
    console.log('Decoded Token:', decoded);

    return NextResponse.next();
  } catch (error) {
    console.error('Token verification failed:', error);
    return NextResponse.redirect(new URL('/login', req.url));
  }
}

export const config = {
  matcher: '/dashboard',
};
