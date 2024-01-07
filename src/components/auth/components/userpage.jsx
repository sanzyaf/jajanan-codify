import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  User,
} from "@nextui-org/react";

export default function NavbarUser() {
  return (
    <Navbar>
      <NavbarBrand>
        <img alt="" src="/jajanan.png" width={150} height={50} />
      </NavbarBrand>
      <NavbarContent justify="end" className="space-x-6">
        <User
          name="Jane Doe"
          description="Product Designer"
          avatarProps={{
            src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
          }}
        />
        <NavbarItem className="lg:flex">
          <Link className="text-black" href="/dashboard">
            Our Service
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" variant="ghost" href="">
            Offers
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
