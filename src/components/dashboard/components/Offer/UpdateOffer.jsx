"use client";
import React from 'react'
import { Button, Input } from "@nextui-org/react";
import Link from "next/link";

export default function UpdateOffer() {
  return (
    <main>
      <section className="flex justify-between items-end mb-7">
        <div>
          <h1 className="font-bold text-2xl">Update Offer</h1>
          <h5 className="text-xs">Update Offer Jajanan here</h5>
        </div>
      </section>
      <section>
        <div className="py-3">
          <label>Purposed Price</label>
          <Input placeholder="Clean shoes" name="purposedPrice" />
        </div>
        <div className="py-3">
          <label>Status</label>
          <Input placeholder="price" name="status" />
        </div>
        <div className="mt-7">
          <Button shadow color="primary">
            <Link href="/dashboard/products">Update Data</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
