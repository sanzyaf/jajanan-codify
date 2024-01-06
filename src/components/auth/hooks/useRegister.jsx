"use-client";

import { API_URL } from "@/config/apiUrl";
import { useState } from "react";
import toast from "react-hot-toast";

export const useRegister = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [registerData, setRegisterData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
  }

  async function handleSubmitRegister() {
    setLoading(true);
    const { firstname, lastname, username, email, password } = registerData;
    const res = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ firstname, lastname, username, email, password }),
    });

    const data = await res.json();

    if (!data) {
      setLoading(false);
      toast.error("Failed to register");
      return;
    }

    setLoading(false);
    toast.success("User registered, please login...");
  }

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return {
    loading,
    showPassword,
    registerData,
    handleChange,
    handleSubmitRegister,
    handleTogglePassword,
  };
};
