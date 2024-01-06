import { Home } from "@/components/auth/components/home";
import React from "react";
import NavbarUser from "@/components/auth/components/userpage";

export default function Page() {
  return (
    <div>
      <NavbarUser />
      <Home />
    </div>
  );
}
