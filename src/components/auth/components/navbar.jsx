import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";

export default function NavbarUI() {
  return (
    <Navbar>
      <NavbarBrand>
        <Link href="/">
          <img alt="" src="/jajanan.png" width={150} height={50} />
        </Link>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem className="lg:flex">
          <Link href="/youtube.com">Services</Link>
        </NavbarItem>
        <NavbarItem className="lg:flex">
          <Link href="/register">Register</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" variant="ghost" href="/login">
            Login
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
