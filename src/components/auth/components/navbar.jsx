import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

export default function NavbarUI({ isLoggedIn }) {
  return (
    <Navbar>
      <NavbarBrand>
        <Link href="/">
          <img alt="" src="/jajanan.png" width={150} height={50} />
        </Link>
      </NavbarBrand>
      <NavbarContent justify="end" className="space-x-6">
        <NavbarItem className="lg:flex">
          <Link href="/" className="text-black">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem className="lg:flex">
          <Link href="/" className="text-black">
            About
          </Link>
        </NavbarItem>
        <NavbarItem className="lg:flex">
          <Link href="/" className="text-black">
            Our Service
          </Link>
        </NavbarItem>
        <NavbarItem className="lg:flex">
          <Link href="/" className="text-black">
            Offers
          </Link>
        </NavbarItem>
        {isLoggedIn ? ( // if user is not logged in, show register and login link
          <NavbarItem className="lg:flex">
            <Link href="/auth/login">Login</Link>
            <Link href="/auth/register">
              <Button auto>Register</Button>
            </Link>
          </NavbarItem>
        ) : (
          // if user is logged in, show dashboard link
          <NavbarItem>
            <Link href="/dashboard">
              <Button
                className="rounded-lg p-2"
                color="primary"
                variant="ghost"
              >
                Login/Register
              </Button>
            </Link>
          </NavbarItem>
        )}
      </NavbarContent>
    </Navbar>
  );
}
