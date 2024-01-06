import TableService from "@/components/dashboard/components/TableService";
import { Button } from "@nextui-org/react";
import { Plus } from "lucide-react";
import Link from "next/link";
import React from "react";

export default async function Page() {
  return (
    <div>
      <section className="flex justify-between items-end mb-7">
        <div>
          <h1 className="font-bold">Our Services</h1>
          <h5 className="text-xs">Here you can see all service</h5>
        </div>
        <div>
         <Button shadow color="primary">
            <Link href="/dashboard/services/add" className="justify-between flex items-center gap-3">Add Data<Plus /></Link>
          </Button>
        </div>
      </section>
      {/* <AllProducts /> */}
      <TableService />
    </div>
  );
}
