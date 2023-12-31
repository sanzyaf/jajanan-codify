import prisma from '@/utils/prisma';
import middleware from '@/middleware';

export const getDashboardData = async (req, res) => {
  if (req?.httpMethod !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    // Extract the user ID or unique identifier from the request
    const userId = req.user?.id; // Ensure that req.user provides the user ID after authentication
    const username = req.user?.username;
    const email = req.user?.email;

    console.log('userId:', userId);
    console.log('username:', username);

    // Fetch dashboard-specific data for the user based on their ID
    const userDashboardData = await prisma.dashboardData.findUnique({
      where: {
        userId: userId, // Assuming the dashboard data is associated with the user ID
      },
      // Include any necessary dashboard data fields here
    });

    if (!userDashboardData) {
      return res.status(404).json({ message: 'Dashboard data not found' });
    }

    return res.status(200).json({ userDashboardData });
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
