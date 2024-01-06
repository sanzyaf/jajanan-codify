import { AllServices } from "@/components/services/allServices";
import { Header } from "@/components/sharedUI/header";
import { apiUrl } from "@/config/apiUrl";
import Link from 'next/link';
import Image from 'next/image';

async function getData(query) {
  if (!query) {
    const res = await fetch(`${apiUrl}/services`);
    const data = await res.json();
    console.log("All services data:", data);
    return data;
  }

  const res = await fetch(`${apiUrl}/services?q=${query}`);
  const data = await res.json();
  return data;
}

export default async function Home({ searchParams }) {
  const { data } = await getData(searchParams.q);
  console.log("data searchParams.q :", data);
  return (
    <main className="max-w-5xl m-auto py-8 space-y-20">
      <Header />

      <section className="text-center w-[700px] m-auto space-y-2">
        <h1>
          8,186 curated design resources to speed up your creative workflow.
        </h1>
        <p>
          Join a growing family of 723,787 designers and makers from around the
          world.
        </p>
      </section>

      <AllServices servicesData={data} />
    </main>
  );
}
