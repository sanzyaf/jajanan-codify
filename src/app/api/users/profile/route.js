// routes/user.js

import prisma from "@/utils/prisma";

export async function getUser(req, res) {
  try {
    const userId = req.params.userId; // Assuming the user ID is in the URL params

    const userData = await prisma.user.findMany({
      where: {
        id: userId,
      },
    });

    if (!userData) {
      return res.status(404).json({ error: 'User not found' });
    }

    return res.status(200).json({ message: 'User data fetched successfully!', data: userData });
  } catch (error) {
    console.error('Error fetching user data:', error);
    return res.status(500).json({ error: 'Failed to fetch user data' });
  }
}

export async function updateUser(req, res) {
  try {
    const userId = req.params.userId; // Assuming the user ID is in the URL params
    const updatedUserData = req.body; // Assuming the updated data is sent in the request body

    // Use Prisma's update function to update the user data
    const updatedUser = await prisma.user.update({
      where: {
        id: userId,
      },
      data: updatedUserData,
    });

    return res.status(200).json({ message: 'User data updated successfully!', updatedUser });
  } catch (error) {
    console.error('Error updating user data:', error);
    return res.status(500).json({ error: 'Failed to update user data' });
  }
}
