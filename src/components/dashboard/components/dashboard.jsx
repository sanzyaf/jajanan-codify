import React from "react";
import Card from "./Card";

export default function Dashboard({ serviceTotal, offerTotal, transactionTotal }) {
  return (
    <main>
      <section className="grid grid-cols-3 space-x-5">
        <Card title="Service" subtitle={serviceTotal} />
        <Card title="My Offers" subtitle={offerTotal} />
        <Card title="Transaction" subtitle="-" />
      </section>
    </main>
  );
}
