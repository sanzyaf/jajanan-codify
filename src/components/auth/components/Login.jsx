"use client";

import React from "react";
import Link from "next/link";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Button, Input } from "@nextui-org/react";
import AuthLayout from "./AuthLayout/AuthLayout";
import { useLogin } from "../hooks/useLogin";

export const Login = () => {
  const { loading, showPassword, handleChange, handleSubmitLogin, handleTogglePassword } = useLogin();

  return (
    <div>
      <AuthLayout
        title={"JaJanan"}
        subtitle={"Please Login to your account"}
        children={
          <form className="mt-2">
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="username">
                Email
              </label>
              <Input onChange={handleChange} type="email" id="email" name="email" placeholder="user@mail.com" />
            </div>
            <div className="mb-4 relative">
              <label className="block text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <div className="relative">
                <Input onChange={handleChange} type={showPassword ? "text" : "password"} id="password" name="password" placeholder="Password" />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  {showPassword ? (
                    <FaEyeSlash onClick={handleTogglePassword} className="cursor-pointer" />
                  ) : (
                    <FaEye onClick={handleTogglePassword} className="cursor-pointer" />
                  )}
                </div>
              </div>
            </div>
            <div className="flex justify-center py-4">
              <Button isDisabled={loading} onClick={handleSubmitLogin} type="submit" color="success" className="w-full text-white p-3 font-bold">
                Login
              </Button>
            </div>
            <div className="mt-3 py-4 text-center">
              <h5 className="text-sm">
                Don't have an account?{" "}
                <Link href="/register" className="text-success font-bold">
                  Register
                </Link>
              </h5>
            </div>
          </form>
        }
      />
    </div>
  );
};
