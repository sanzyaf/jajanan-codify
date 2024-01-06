import CreateService from "@/components/dashboard/components/Service";
import React from "react";
import { cookies } from "next/headers";
import { verify } from "jsonwebtoken";

export default function Page() {
  const token = cookies().get("token")?.value;
  const userData = verify(token, process.env.JWT_SECRET);

  return <CreateService userId={userData.id} />;
}
