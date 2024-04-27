"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function Admin() {
  const router = useRouter();
  useEffect(() => {
    router.push("/admin/dashboard");
  }, []);
  return null;
}

export default Admin;
