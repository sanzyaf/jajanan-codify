import Dashboard from "@/components/dashboard/components/dashboard";
import { API_URL } from "@/config/apiUrl";
import React from "react";
import { cookies } from "next/headers";
import { verify } from "jsonwebtoken";

async function getServices(authorId) {
  const res = await fetch(`${API_URL}/services?authorId=${authorId}`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
}

async function getOffers(serviceAuthorId) {
  const res = await fetch(`${API_URL}/offers?serviceAuthorId=${serviceAuthorId}`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
}

export default async function Page() {
  const token = cookies().get("token")?.value;
  const userData = verify(token, process.env.JWT_SECRET);
  const services = await getServices(userData.id);
  const offers = await getOffers(userData.id);

  return <Dashboard serviceTotal={services.data.length} offerTotal={offers.data.length} />;
}
