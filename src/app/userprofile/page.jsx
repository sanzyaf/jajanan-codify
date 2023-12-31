"use client";
import React, { useEffect, useState } from 'react';
import { getUserProfile } from '../../utils/api';
import { Button } from '@nextui-org/react';
import Link from 'next/link';

const DashboardPage = () => {

  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem('accessToken');
        console.log('Token Header from dashboard:', token); // Log the token retrieved from localStorage
  
        if (!token) {
          throw new Error('Token not found');
        }
  
        // Use token in API request header
        const userProfile = await getUserProfile(token);
        console.log('User Profile:', userProfile);
        setUserProfile(userProfile); // Set the user profile in state
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };
  
    fetchUserProfile();
  }, []);
  

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <Button size="small" auto>
        Logout
      </Button>

      {/* Display user information */}
      {userProfile && (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Welcome, {userProfile.username}!</h2>
          <p>You have {userProfile.services.length} services</p>
          <p>You have {userProfile.testimonials.length} testimonials</p>
        </div>
      )}
    </div>
  );
};

export default DashboardPage;
