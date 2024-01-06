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
    name: "Clean Shoes",
    description: "Clean your shoes",
    price: "Rp. 10.000",
    status: "Active",
  },
  {
    id: 2,
    name: "Clean Shoes",
    description: "Clean your shoes",
    price: "Rp. 10.000",
    status: "Active",
  },
  {
    id: 3,
    name: "Clean Shoes",
    description: "Clean your shoes",
    price: "Rp. 10.000",
    status: "Active",
  },
  {
    id: 4,
    name: "Clean Shoes",
    description: "Clean your shoes",
    price: "Rp. 10.000",
    status: "Active",
  },
  {
    id: 5,
    name: "Clean Shoes",
    description: "Clean your shoes",
    price: "Rp. 10.000",
    status: "Active",
  },
  {
    id: 6,
    name: "Clean Shoes",
    description: "Clean your shoes",
    price: "Rp. 10.000",
    status: "Active",
  },
  {
    id: 7,
    name: "Clean Shoes",
    description: "Clean your shoes",
    price: "Rp. 10.000",
    status: "Active",
  },
  {
    id: 8,
    name: "Clean Shoes",
    description: "Clean your shoes",
    price: "Rp. 10.000",
    status: "Active",
  },
];

export default function TableService() {
  return (
    <Table aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>ID</TableColumn>
        <TableColumn>SERVICE NAME</TableColumn>
        <TableColumn>DESCRIPTION</TableColumn>
        <TableColumn>PRICE</TableColumn>
        <TableColumn>STATUS</TableColumn>
        <TableColumn>ACTION</TableColumn>
      </TableHeader>
      <TableBody>
        {tableData.map((data) => (
          <TableRow key={data.id}>
            <TableCell>{data.id}</TableCell>
            <TableCell>{data.name}</TableCell>
            <TableCell>{data.description}</TableCell>
            <TableCell>{data.price}</TableCell>
            <TableCell color={statusColorMap[tableData.status]}>
              {data.status}
            </TableCell>
            <TableCell>
              <div className="space-x-3">
                <button className="text-success">
                  <Eye size={20} />
                </button>
                <button className="text-primary">
                  <Link href="/dashboard/services/update">
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
