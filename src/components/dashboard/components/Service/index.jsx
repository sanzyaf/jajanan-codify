"use client";

import { Button, Input, Textarea } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

export default function CreateService({ userId }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function createService(event) {
    setLoading(true);
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append("authorId", userId);

    const res = await fetch("/api/services", {
      method: "POST",
      body: formData,
    });

    if (!res.ok) {
      setLoading(false);
      toast.error("Failed to create service");
    }

    setLoading(false);
    toast.success("Service created");
    router.push("/dashboard");
  }

  return (
    <main>
      <section className="flex justify-between items-end mb-7">
        <div>
          <h1 className="font-bold text-2xl">Create Service</h1>
          <h5 className="text-xs">Create service Jajanan here</h5>
        </div>
      </section>

      <form onSubmit={createService}>
        <section className="space-y-5">
          <div className="space-y-2">
            <label>Service Name</label>
            <Input placeholder="Clean shoes" name="title" className="text-gray-400" className="text-gray-400"/>
          </div>
          <div className="space-y-2">
            <label>Description</label>
            <Textarea placeholder="Description" name="description" className="text-gray-400" className="text-gray-400"/>
          </div>
          <div className="space-y-2">
            <label>Location</label>
            <Input placeholder="Jakarta" name="location" className="text-gray-400"/>
          </div>
          <div className="space-y-2">
            <label>Price</label>
            <Input placeholder="price" name="price" type="number" className="text-gray-400" className="text-gray-400"/>
          </div>
          <Button isDisabled={loading} type="submit" shadow color="primary">
            Create Service
          </Button>
        </section>
      </form>
    </main>
  );
}
