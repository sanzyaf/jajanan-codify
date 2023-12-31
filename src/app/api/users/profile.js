import { NextApiRequest, NextApiResponse } from 'next';
import { verify } from 'jsonwebtoken';
import prisma from '@/utils/prisma'; // Import your Prisma instance or database module

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('Request Headers:', req.headers); // Log the incoming request headers

  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const token = req.headers.authorization?.replace('Bearer ', '');
    if (!token) {
      return res.status(401).json({ message: 'Unauthorized: Missing token' });
    }

    // Verify the token and get the payload (user information)
    const decoded = verify(token, process.env.JWT_SECRET);
    const userId = decoded.id; // Assuming the payload contains user ID

    // Retrieve user profile from the database using the user ID
    const userProfile = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      // Include any necessary user profile fields here
    });

    if (!userProfile) {
      return res.status(404).json({ message: 'User profile not found' });
    }

    return res.status(200).json({ userProfile });
  } catch (error) {
    console.error('Error fetching user profile:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
