import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

export default function NavbarUI() {
  return (
    <Navbar>
      <NavbarBrand>
        <img alt="" src="/jajanan.png" width={150} height={50} />
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem className="lg:flex">
          <Link href="/youtube.com">Services</Link>
        </NavbarItem>
        <NavbarItem className="lg:flex">
          <Link href="/register">Register</Link>
        </NavbarItem>
        <NavbarItem className="lg:flex">
          <Link href="/login">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" variant="ghost" href="/login">
            Create Services
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
