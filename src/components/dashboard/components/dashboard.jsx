import React from "react";
import Card from "./Card";

export default function Dashboard() {
  return (
    <main>
      <section className="grid grid-cols-4 space-x-5">
        <Card title="Users" subtitle="42" />
        <Card title="Total Offers" subtitle="120" />
        <Card title="Accepted Offers" subtitle="100" />
        <Card title="Transaction" subtitle="10" />
      </section>
    </main>
  );
}
