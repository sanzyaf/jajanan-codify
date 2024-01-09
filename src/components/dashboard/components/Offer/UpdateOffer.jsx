"use client";
import React from "react";
import Link from "next/link";
import { Button, Input, Select, SelectItem } from "@nextui-org/react";

export default function UpdateOffer() {
  const statuses = [
    { label: "Active", value: "active" },
    { label: "Inactive", value: "inactive" },
  ];

  return (
    <main>
      <section className="flex justify-between items-end mb-7">
        <div>
          <h1 className="font-bold text-2xl">Create Offer</h1>
          <h5 className="text-xs">Create Offer Jajanan here</h5>
        </div>
      </section>
      <section>
        <div className="py-3">
          <label>Purposed Price</label>
          <Input placeholder="10000" name="purposedPrice" className="text-gray-400"/>
        </div>
        <div className="py-3">
          <div className="py-3">
            <label>Status</label>
          </div>
          <Select
            isRequired
            label="Status" // Fix the typo here
            placeholder="Select a status"
            defaultSelectedKeys={["active"]}
            className="max-w-xs"
          >
            {statuses.map((status) => (
              <SelectItem key={status.value} value={status.value}>
                {status.label}
              </SelectItem>
            ))}
          </Select>
        </div>
        <div className="mt-7">
          <Button shadow color="primary">
            <Link href="/dashboard">Create Offer</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
