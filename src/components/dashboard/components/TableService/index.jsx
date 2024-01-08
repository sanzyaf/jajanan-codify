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


export default function TableService({ data, userId }) {
  console.log(userId);
  return (
    <Table aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>SERVICE NAME</TableColumn>
        <TableColumn>DESCRIPTION</TableColumn>
        <TableColumn>PRICE</TableColumn>
        <TableColumn>STATUS</TableColumn>
        <TableColumn>ACTION</TableColumn>
      </TableHeader>
      <TableBody>
        {data.map((data) => (
          <TableRow key={data.id}>
            <TableCell>{data.title}</TableCell>
            <TableCell>{data.description}</TableCell>
            <TableCell>{data.price}</TableCell>
            <TableCell>{data.isActive ? "Active" : "Not Active"}</TableCell>
            <TableCell>
              <div className="space-x-3">
              <Link href={`/services/${data.slug}`}> 
                  <button className="text-success">
                    <Eye size={20} />
                  </button>
                </Link>
                {userId && userId === data.authorId &&  (
                  <button className="text-primary">
                    <Link href="/dashboard/services/update">
                      <PencilLine size={20} />
                    </Link>
                  </button>
                )}
                {userId && userId === data.authorId &&  (
                <button className="text-danger">
                  <Trash2 size={20} />
                </button>
                )}
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
