"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { loginUser } from '../../utils/api';
import { Input, Button } from '@nextui-org/react';
import Link from 'next/link';
import Cookies from 'js-cookie';
import { useEffect } from 'react';
import middleware from '@/middleware';
// This function should be called after a successful login
const storeTokenInLocalStorage = (token, id, username) => {
  localStorage.setItem('accessToken', token);
  localStorage.setItem('username', username);
  localStorage.setItem('id', id);
};
const LoginPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await loginUser(formData);

      console.log('Response from Login:', data);
      //console.log('Access Token from login:', data.accessToken);

      // Set the token as a cookie
      if (data.accessToken, data.id, data.username) {
        storeTokenInLocalStorage(data.accessToken, data.id, data.username);
        Cookies.set('accessToken', accessToken, {
          expires: 7, // Set the appropriate cookie expiry (in days)
          path: '/', // Set the cookie path
        });
      }
      // Redirect to dashboard or handle the login success
      //router.push('/dashboard');
    } catch (error) {
      console.error('Login failed:', error);
    }
};

useEffect(() => {
  // Retrieve the token from localStorage
  const token = localStorage.getItem('accessToken');
  console.log('Retrieved token from local storage:', token);
  const id = localStorage.getItem('id');
  console.log('Retrieved userId from local storage:', id);
  const username = localStorage.getItem('username');
  console.log('Retrieved username from local storage:', username);
  // Use the token for further operations (e.g., API requests)
}, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-6">Login Page</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <Input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className="mb-4"
        />
        <Input
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          className="mb-4"
        />
        <Button type="submit" auto onClick={() => router.push('/dashboard', { scroll: false })}>
          Login
        </Button>
        <Link href="/register">I haven't registered yet</Link>
      </form>
    </div>
  );
};

export default LoginPage;
