import { Home } from "@/components/auth/components/home";
import React from "react";
import NavbarUI from "@/components/auth/components/navbar";

export default function Page() {
  return (
    <div>
      <NavbarUI />
      <Home />
    </div>
  );
}
