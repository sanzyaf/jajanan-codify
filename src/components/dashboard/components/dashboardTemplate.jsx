import React from "react";
import Link from "next/link";
import { Activity, Box, LogOut, Receipt } from "lucide-react";
import { User } from "@nextui-org/react";

export const DashboardTemplate = ({ children }) => {
  return (
    <main className="flex h-screen">
      <aside className="w-[230px] border-r-1 p-8 flex flex-col justify-between">
        <div>
          <Link className="menu" href="">
            <User
              name="Jane Doe"
              description="Product Designer"
              avatarProps={{
                src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
              }}
            />
          </Link>
          <Link className="menu" href="/dashboard">
            <Activity size={15} />
            Dashboard
          </Link>
          <Link className="menu" href="/dashboard/services">
            <Box size={15} />
            Service
          </Link>
          <Link className="menu" href="/dashboard/offers">
            <Receipt size={15} />
            Price Offer
          </Link>
        </div>
        <div className="menu">
          <LogOut size={15} />
          Logout
        </div>
      </aside>
      <section className="w-[calc(100vw-230px)] p-8">
        <div className="max-w-5xl m-auto">{children}</div>
      </section>
    </main>
  );
};
