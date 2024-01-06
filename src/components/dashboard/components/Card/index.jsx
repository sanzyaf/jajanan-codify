import { Card, CardBody } from "@nextui-org/react";
import React from "react";

export default function CardBox({ title, subtitle }) {
  return (
    <Card shadow="none" className="p-4 border border-slate-200">
      <CardBody className="space-y-1">
        <h6>{title}</h6>
        <h1 className="font-bold">{subtitle}</h1>
      </CardBody>
    </Card>
  );
}
