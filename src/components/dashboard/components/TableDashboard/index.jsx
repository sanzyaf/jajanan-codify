"use client";
import React from 'react'
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";
import { Eye, PencilLine, Trash2 } from 'lucide-react';

const statusColorMap = {
  active: "success",
  paused: "danger",
  vacation: "warning",
};

const tableData = [
  {
    id: 1,
    serviceName: "Clean Shoes",
    description: "Clean your shoes",
    price: "Rp. 10.000",
    status: "Active",
    action: "Edit",
  },
  {
    id: 2,
    serviceName: "Clean Shoes",
    description: "Clean your shoes",
    price: "Rp. 10.000",
    status: "Active",
    action: "Edit",
  },
  {
    id: 3,
    serviceName: "Clean Shoes",
    description: "Clean your shoes",
    price: "Rp. 10.000",
    status: "Active",
    action: "Edit",
  },
  {
    id: 4,
    serviceName: "Clean Shoes",
    description: "Clean your shoes",
    price: "Rp. 10.000",
    status: "Active",
    action: "Edit",
  },
  {
    id: 5,
    serviceName: "Clean Shoes",
    description: "Clean your shoes",
    price: "Rp. 10.000",
    status: "Active",
    action: "Edit",
  },
  {
    id: 6,
    serviceName: "Clean Shoes",
    description: "Clean your shoes",
    price: "Rp. 10.000",
    status: "Active",
    action: "Edit",
  },
  {
    id: 7,
    serviceName: "Clean Shoes",
    description: "Clean your shoes",
    price: "Rp. 10.000",
    status: "Active",
    action: "Edit",
  },
  {
    id: 8,
    serviceName: "Clean Shoes",
    description: "Clean your shoes",
    price: "Rp. 10.000",
    status: "Active",
    action: "Edit",
  },
];

export default function TableDashboard() {
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
            <TableCell>{data.serviceName}</TableCell>
            <TableCell>{data.description}</TableCell>
            <TableCell>{data.price}</TableCell>
            <TableCell color={statusColorMap[tableData.status]}>{data.status}</TableCell>
            <TableCell>
              <div className="space-x-3">
              <button className="text-success"><Eye size={20}/></button>
              <button className="text-primary"><PencilLine size={20}/></button>
              <button className="text-danger"><Trash2 size={20}/></button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
