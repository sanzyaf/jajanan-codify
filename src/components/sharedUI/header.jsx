import { Button } from "@nextui-org/react";
import React from "react";

export const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <div>Header</div>
      <Button>Login</Button>
    </header>
  );
};
