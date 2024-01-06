import { Home } from "@/components/auth/components/home";
import React from "react";
import NavbarUI from "@/components/auth/components/navbar";
import { API_URL } from "@/config/apiUrl";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import { Order } from "@/components/order/order";
import { cookies } from "next/headers";
import { verify } from "jsonwebtoken";

async function getService(slug) {
  const res = await fetch(`${API_URL}/services/${slug}`, {
    cache: "no-store",
  });
  const json = await res.json();
  return json;
}

export default async function Page({ params }) {
  const { data: service } = await getService(params.slug);
  const token = cookies().get("token")?.value;
  const userData = verify(token, process.env.JWT_SECRET);

  return <Order service={service} authorId={userData.id} />;
}
