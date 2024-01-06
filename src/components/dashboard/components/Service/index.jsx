"use client";
import { Button, Input, Textarea } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

export default function CreateService() {
  return (
    <main>
      <section className="flex justify-between items-end mb-7">
        <div>
          <h1 className="font-bold text-2xl">Create Service</h1>
          <h5 className="text-xs">Create service Jajanan here</h5>
        </div>
      </section>

      <section>
        <div className="py-3">
          <label>Service Name</label>
          <Input placeholder="Clean shoes" name="name"/>
        </div>
        <div className="py-3">
          <label>Description</label>
          <Textarea placeholder="Description" name="description"/>
        </div>
        <div className="py-3">
          <label>Price</label>
          <Input placeholder="price" name="price"/>
        </div>
        <div className="py-3">
          <label>Status</label>
          <Input placeholder="Status" name="status"/>
        </div>
        <div className="mt-7">
          <Button shadow color="primary">
            <Link
              href="/dashboard">
              Save Data
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
