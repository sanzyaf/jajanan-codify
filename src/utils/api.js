// utils/api.js
import middleware from "@/middleware";

// Register a new user
export const registerUser = async (formData) => {
    try {
      // Perform POST request to register user
      const response = await fetch('/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error('Registration failed');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  };
  
  // Login user
  
 // Perform login and store token in local storage
 export const loginUser = async (formData) => {
  try {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Login failed');
    }

    const data = await response.json();
    console.log('Login data:', data); // Log the received data

    // Store the token in localStorage
    // localStorage.setItem('accessToken', data.accessToken);
    // console.log('Stored token:', localStorage.getItem('accessToken'));
    return data;
    console.log('passed data after login: ',data); // Ensure the token is returned properly
  } catch (error) {
    throw new Error(error.message);
  }
};

//Fetch Dashboard Data
export const fetchDashboardData = async (token) => {
  try {
    if (!token) {
      throw new Error('Token not found');
    }

    const response = await fetch('/api/users/dashboard', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch dashboard data');
    }

    const data = await response.json();
    console.log('data fetched: ', data);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getUserProfile = async (userId) => {
  try {
    const response = await fetch(`/api/users/profile`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch user profile');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const updateUserProfile = async (userId, updatedData) => {
  try {
    const response = await fetch(`/api/users/profile`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    });

    if (!response.ok) {
      throw new Error('Failed to update user profile');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};
  