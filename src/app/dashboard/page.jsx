// src/app/dashboard/page.jsx
"use client";
import React, { useEffect, useState } from 'react';
import { fetchDashboardData } from '../../utils/api';
import { Button } from '@nextui-org/react';
import middleware from '@/middleware';

const DashboardPage = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const [username, setUsername] = useState('');

  const fetchDashboard = async () => {
    try {
      const token = localStorage.getItem('accessToken');
      console.log('token fetch in dashboard: ', token);
      const storedUsername = localStorage.getItem('username');
      console.log('username fetch in dashboard: ', storedUsername);
      if (storedUsername) {
        setUsername(storedUsername);
      }
      if (!token) {
        throw new Error('Token not found');
      }

      const data = await fetchDashboardData(token);
      console.log('Dashboard Data:', data);

      setDashboardData(data);
      
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    }
  };

  useEffect(() => {
    fetchDashboard();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <h2 className="text-2xl font-semibold mb-4">Welcome, {username}!</h2>
      <Button size="small" auto>
        Logout
      </Button>

      {/* {dashboardData && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Welcome, {username}!</h2>
          <p>You have {dashboardData.services.length} services</p>
          <p>You have {dashboardData.testimonials.length} testimonials</p>
        </div>
      )} */}
    </div>
  );
};

export default DashboardPage;
