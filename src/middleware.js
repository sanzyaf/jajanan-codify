import { jwtVerify } from 'jose';
import { NextResponse } from 'next/server';

// Middleware function
export default async function middleware(req) {
  const token = req.cookies.get('accessToken')?.value;
  console.log('middleware token: ', token);

  if (!token) {
    return NextResponse.redirect(new URL('/login', req.url)); // Adjust the domain accordingly
  }

  try {
    const jwtSecret = process.env.JWT_SECRET;
    const key = new TextEncoder().encode(jwtSecret); // Convert the secret key to Uint8Array

    const decoded = await jwtVerify(token, key, { algorithms: ['HS256'] });
    console.log('Decoded Token in middleware:', decoded);

    return NextResponse.next();
  } catch (error) {
    console.error('Token verification failed:', error);
    return NextResponse.redirect(new URL('/login', req.url)); // Adjust the domain accordingly
  }
}

export const config = {
  matcher: '/dashboard',
};
