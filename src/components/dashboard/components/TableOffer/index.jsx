"use client";
import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import { Eye, PencilLine, Trash2 } from "lucide-react";
import Link from "next/link";

const statusColorMap = {
  active: "success",
  paused: "danger",
  vacation: "warning",
};

const tableData = [
  {
    id: 1,
    purposedPrice: "Rp. 10.000",
    serviceId: 1,
    userId: 1,
    status: "active",
  },
  {
    id: 2,
    purposedPrice: "Rp. 10.000",
    serviceId: 1,
    userId: 1,
    status: "active",
  },
  {
    id: 3,
    purposedPrice: "Rp. 10.000",
    serviceId: 1,
    userId: 1,
    status: "active",
  },
  {
    id: 4,
    purposedPrice: "Rp. 10.000",
    serviceId: 1,
    userId: 1,
    status: "active",
  },
  {
    id: 5,
    purposedPrice: "Rp. 10.000",
    serviceId: 1,
    userId: 1,
    status: "active",
  },
  {
    id: 6,
    purposedPrice: "Rp. 10.000",
    serviceId: 1,
    userId: 1,
    status: "active",
  },
];

export default function TableOffer() {
  return (
    <Table aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>ID</TableColumn>
        <TableColumn>PURPOSED PRICE</TableColumn>
        <TableColumn>STATUS</TableColumn>
        <TableColumn>SERVICE ID</TableColumn>
        <TableColumn>USER ID</TableColumn>
        <TableColumn>ACTION</TableColumn>
      </TableHeader>
      <TableBody>
        {tableData.map((data) => (
          <TableRow key={data.id}>
            <TableCell>{data.id}</TableCell>
            <TableCell>{data.purposedPrice}</TableCell>
            <TableCell color={statusColorMap[tableData.status]}>
              {data.status}
            </TableCell>
            <TableCell>{data.serviceId}</TableCell>
            <TableCell>{data.userId}</TableCell>
            <TableCell>
              <div className="space-x-3">
                <button className="text-success">
                  <Eye size={20} />
                </button>
                <button className="text-primary">
                  <Link href="/dashboard/offers/update">
                    <PencilLine size={20} />
                  </Link>
                </button>
                <button className="text-danger">
                  <Trash2 size={20} />
                </button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
