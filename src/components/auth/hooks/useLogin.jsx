"use-client";

import { API_URL } from "@/config/apiUrl";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export const useLogin = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  }

  async function handleSubmitLogin() {
    setLoading(true);
    const { email, password } = loginData;
    const res = await fetch(`${API_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    console.log(data);

    setLoading(false);
    toast.success("Login succesfully, redirecting...");
    router.push("/dashboard");
  }

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return {
    loading,
    showPassword,
    loginData,
    handleChange,
    handleSubmitLogin,
    handleTogglePassword,
  };
};
