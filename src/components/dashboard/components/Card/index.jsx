import { Card, CardBody } from "@nextui-org/react";
import React from "react";

export default function CardBox({ title, subtitle}) {
  return (
    <div>
      <Card className="">
        <CardBody className="space-y-3">
          <h1 className="font-bold">{title}</h1>
          <p className="font-bold">{subtitle}</p>
        </CardBody>
      </Card>
    </div>
  );
}
