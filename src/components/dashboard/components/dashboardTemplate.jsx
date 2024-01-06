import React from "react";
import Link from "next/link";
import { Activity, Box, LogOut, Receipt } from "lucide-react";
import { User } from "@nextui-org/react";
import { cookies } from "next/headers";
import { verify } from "jsonwebtoken";

export const DashboardTemplate = ({ children }) => {
  const token = cookies().get("token")?.value;
  const data = verify(token, process.env.JWT_SECRET);

  return (
    <main className="flex h-screen">
      <aside className="w-[280px] border-r-1 p-8 flex flex-col justify-between">
        <div className="space-y-4">
          <User
            name={data?.username}
            avatarProps={{
              src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
            }}
          />
          <div className="space-y-2">
            <Link className="menu" href="/dashboard">
              <Activity size={15} />
              Dashboard
            </Link>
            <Link className="menu" href="/dashboard/services">
              <Box size={15} />
              Services
            </Link>
            <Link className="menu" href="/dashboard/offers">
              <Receipt size={15} />
              Price Offer
            </Link>
          </div>
        </div>
        <div className="menu">
          <LogOut size={15} />
          Logout
        </div>
      </aside>
      <section className="w-[calc(100vw-280px)] p-8">
        <div className="max-w-5xl m-auto">{children}</div>
      </section>
    </main>
  );
};
