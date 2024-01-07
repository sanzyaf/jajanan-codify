import { Home } from "@/components/auth/components/home";
import React from "react";
import NavbarUI from "@/components/auth/components/navbar";
import { API_URL } from "@/config/apiUrl";
import Link from "next/link";

async function getAllServices() {
  const res = await fetch(`${API_URL}/services`, {
    cache: "no-store",
  });
  const json = await res.json();
  return json;
}

export default async function Page() {
  const { data: services } = await getAllServices();
  console.log(services);

  return (
    <main className="">
      <NavbarUI />
      <section className="">
        {/* {services.map((service) => {
          return (
            <Link href={`/services/${service.slug}`}>
              <div key={service.id}>
                <h4>{service.title}</h4>
                <p>{service.price}</p>
              </div>
            </Link>
          );
        })} */}
        <Home />
      </section>
    </main>
  );
}
