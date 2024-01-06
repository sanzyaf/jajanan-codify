"use client";

import React from "react";
import Link from "next/link";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useRegister } from "../hooks/useRegister";
import { Button, Input } from "@nextui-org/react";
import AuthLayout from "./AuthLayout/AuthLayout";

export const Register = () => {
  const {
    loading,
    showPassword,
    handleChange,
    handleSubmitRegister,
    handleTogglePassword,
  } = useRegister();

  return (
    <div>
      <AuthLayout
        title={"JaJanan"}
        subtitle={"Please Register to create an account"}
        children={
          <main className="mt-2">
            <div className="mb-4">
              <label
                className="block text-sm font-bold mb-2"
                htmlFor="firstname"
              >
                Firstname
              </label>
              <Input
                onChange={handleChange}
                type="text"
                name="firstname"
                placeholder="Jhon"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-bold mb-2"
                htmlFor="lastname"
              >
                Lastname
              </label>
              <Input
                onChange={handleChange}
                type="text"
                name="lastname"
                placeholder="Doe"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <Input
                onChange={handleChange}
                type="text"
                name="username"
                placeholder="Jhon Doe"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-bold mb-2"
                htmlFor="username"
              >
                Email
              </label>
              <Input
                onChange={handleChange}
                type="email"
                name="email"
                placeholder="user@mail.com"
              />
            </div>
            <div className="mb-4 relative">
              <label
                className="block text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <div className="relative">
                <Input
                  onChange={handleChange}
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  {showPassword ? (
                    <FaEyeSlash
                      onClick={handleTogglePassword}
                      className="cursor-pointer"
                    />
                  ) : (
                    <FaEye
                      onClick={handleTogglePassword}
                      className="cursor-pointer"
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="flex justify-center py-4">
              <Button
                isDisabled={loading}
                onClick={handleSubmitRegister}
                type="submit"
                color="success"
                className="w-full text-white p-3 font-bold"
              >
                Register
              </Button>
            </div>
            <div className="mt-3 py-4 text-center">
              <h5 className="text-sm">
                Already have an account?{" "}
                <Link href="/login" className="text-success font-bold">
                  Login
                </Link>
              </h5>
            </div>
          </main>
        }
      />
    </div>
  );
};
