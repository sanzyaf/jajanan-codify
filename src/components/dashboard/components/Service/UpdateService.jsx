"use client";
import React from 'react'
import { Button, Input, Textarea } from "@nextui-org/react";
import Link from "next/link";

export default function UpdateService() {
  return (
    <main>
    <section className="flex justify-between items-end mb-7">
      <div>
        <h1 className="font-bold text-2xl">Update Service</h1>
        <h5 className="text-xs">Update service Jajanan here</h5>
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
            href="/dashboard/products">
            Update Data
          </Link>
        </Button>
      </div>
    </section>
  </main>
  )
}
