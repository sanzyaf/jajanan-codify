import TableService from "@/components/dashboard/components/TableService";
import { Button } from "@nextui-org/react";
import { Plus } from "lucide-react";
import Link from "next/link";
import React from "react";
import { cookies } from "next/headers";
import { verify } from "jsonwebtoken";
import { API_URL } from "@/config/apiUrl";

async function getServices(authorId) {
  const res = await fetch(`${API_URL}/services?authorId=${authorId}`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
}

export default async function Page() {
  const token = cookies().get("token")?.value;
  const userData = verify(token, process.env.JWT_SECRET);
  const { data: services } = await getServices(userData.id);
  console.log(services);

  return (
    <div>
      <section className="flex justify-between items-end mb-7">
        <div>
          <h1 className="font-bold">Our Services</h1>
          <h5 className="text-xs">Here you can see all service</h5>
        </div>
        <div>
          <Button shadow color="primary">
            <Link href="/dashboard/services/add" className="justify-between flex items-center gap-3">
              Add Data
              <Plus />
            </Link>
          </Button>
        </div>
      </section>
      <TableService data={services} />
    </div>
  );
}
