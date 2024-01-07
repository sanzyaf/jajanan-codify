import TableOffer from "@/components/dashboard/components/TableOffer";
import { Button } from "@nextui-org/react";
import { Plus } from "lucide-react";
import Link from "next/link";
import React from "react";
import { cookies } from "next/headers";
import { verify } from "jsonwebtoken";
import { API_URL } from "@/config/apiUrl";

async function getOffers(serviceAuthorId) {
  const res = await fetch(
    `${API_URL}/offers?serviceAuthorId=${serviceAuthorId}`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  return data;
}

export default async function Page() {
  const token = cookies().get("token")?.value;
  const userData = verify(token, process.env.JWT_SECRET);
  const { data: offers } = await getOffers(userData.id);
  console.log(offers);

  return (
    <div>
      <section className="flex justify-between items-end mb-7">
        <div>
          <h1 className="font-bold">Our Offer</h1>
          <h5 className="text-xs">Here you can see all offer</h5>
        </div>
        <div>
          <Button shadow color="primary">
            <Link
              href="/dashboard/offers/add"
              className="justify-between flex items-center gap-3"
            >
              Add Data
              <Plus />
            </Link>
          </Button>
        </div>
      </section>
      <TableOffer data={offers} />
    </div>
  );
}
