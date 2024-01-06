"use client";
import React, { useState } from 'react';
import { registerUser } from '../../utils/api';
import { Input, Button } from '@nextui-org/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Import the useRouter hook

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const router = useRouter(); // Initialize the router object

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(formData);
      router.push('/login'); // Redirect after successful registration
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-6">Registration Page</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
      <Input
          type="text"
          placeholder="Username"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          className="mb-4"
        />
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
        <Button type="submit" auto>
          Register
        </Button>
        <Link href="/login">I already have an account</Link>
      </form>
    </div>
  );
};

export default RegisterPage;
