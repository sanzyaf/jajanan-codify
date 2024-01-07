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
  isActive: "success",
  paused: "danger",
};



export default function TableOffer({ data }) {


  return (
    <Table aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>SERVICE ID</TableColumn>
        <TableColumn>OFFER PRICE</TableColumn>
        <TableColumn>STATUS</TableColumn>
        <TableColumn>SERVICE ID</TableColumn>
        {/* <TableColumn>USER ID</TableColumn> */}
        <TableColumn>ACTION</TableColumn>
      </TableHeader>
      <TableBody>
        {data.map((data) => (
          <TableRow key={data.id}>
            <TableCell>{data.serviceId}</TableCell>
            <TableCell>{data.offerPrice}</TableCell>
            <TableCell>{data.isActive ? "Active" : "Not Active"}</TableCell>
            <TableCell>{data.authorId}</TableCell>
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
