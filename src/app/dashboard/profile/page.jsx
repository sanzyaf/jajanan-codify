// src/app/profile/page.jsx
"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getUserProfile, updateUserProfile } from '../../../utils/api';
import middleware from "@/middleware";


const EditProfile = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    location: '',
    about: '',
    avatar: '',
    qriscode: '',
  });

  useEffect(() => {
    // Fetch user profile data to pre-fill the form
    const fetchProfileData = async () => {
      try {
        const userId = localStorage.getItem('id');
        const profileData = await getUserProfile(userId);
        setFormData({
          username: profileData.username,
          email: profileData.email,
          password: profileData.password,
          location: profileData.location || '',
          about: profileData.about || '',
          avatar: profileData.avatar || '',
          qriscode: profileData.qrisBarcode || '',
          // Set other fields accordingly
        });
      } catch (error) {
        console.error('Error fetching profile data:', error);
        // Handle error or redirect if necessary
      }
    };

    fetchProfileData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userId = localStorage.getItem('id');
      await updateUserProfile(userId, formData);
      router.push('/profile');
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
 <section className="max-w-4xl p-6 mx-auto  bg-blue-600 rounded-md shadow-md dark:bg-gray-800 mt-20">
    <><h1 className="text-xl font-bold text-white capitalize dark:text-white">Account settings</h1><form onSubmit={handleSubmit}>
     <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
       <div>
         <label className="text-white dark:text-gray-200" for="username">Username</label>
         <input id="username" type="text" value={formData.username} onChange={handleInputChange} class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
       </div>

       <div>
         <label class="text-white dark:text-gray-200" for="emailAddress">Email Address</label>
         <input id="email" type="email" value={formData.email} onChange={handleInputChange}class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
       </div>

       <div>
         <label class="text-white dark:text-gray-200" for="password">Password</label>
         <input id="password" type="password" value={formData.password} onChange={handleInputChange} class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
       </div>
       <div>
         <label class="text-white dark:text-gray-200" for="location">Location</label>
         <select id="location" value={formData.location} onChange={handleInputChange} class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
           <option>Surabaya</option>
           <option>Jakarta</option>
           <option>Yogyakarta</option>
           <option>Bandung</option>
           <option>Samarinda</option>
           <option>Balikpapan</option>
           <option>Penajam Paser Utara (IKN)</option>
           <option>Bontang</option>
           <option>Sangatta</option>
           <option>Berau</option>
           <option>Tarakan</option>
           <option>Sebatik</option>
         </select>
       </div>
       <div>
         <label class="text-white dark:text-gray-200" for="aboutMe">About Me</label>
         <textarea id="about" type="textarea" value={formData.about} onChange={handleInputChange} class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"></textarea>
       </div>
       <div>
         <label class="block text-sm font-medium text-white">
           Profile Picture
         </label>
         <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
           <div class="space-y-1 text-center">
             <svg class="mx-auto h-12 w-12 text-white" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
               <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
             </svg>
             <div class="flex text-sm text-gray-600">
               <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                 <span class="">Upload a file</span>
                 <input id="avatar" name="avatar" type="file" value={formData.avatar} onChange={handleInputChange} class="sr-only" />
               </label>
               <p class="pl-1 text-white">or drag and drop</p>
             </div>
             <p class="text-xs text-white">
               PNG, JPG, GIF up to 10MB
             </p>
           </div>
         </div>
       </div>
       <div>
         <label class="block text-sm font-medium text-white">
           QRIS Code
         </label>
         <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
           <div class="space-y-1 text-center">
             <svg class="mx-auto h-12 w-12 text-white" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
               <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
             </svg>
             <div class="flex text-sm text-gray-600">
               <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                 <span class="">Upload a file</span>
                 <input id="qriscode" name="qriscode" type="file" value={formData.qriscode} onChange={handleInputChange} class="sr-only" />
               </label>
               <p class="pl-1 text-white">or drag and drop</p>
             </div>
             <p class="text-xs text-white">
               PNG, JPG, GIF up to 10MB
             </p>
           </div>
         </div>
       </div>
     </div>

     <div class="flex justify-end mt-6">
       <button type="submit" class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">Save</button>
     </div>
   </form></>
</section>
  );
};

export default EditProfile;
