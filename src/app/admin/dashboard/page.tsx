"use client";
import Header1 from "@lib/components/header/Header1";
import Card1 from "@lib/components/card/Card1";

import React, { useEffect } from "react";

import { useAdminInjection } from "../admin.module";

function Dashboard() {
  const AdminModule = useAdminInjection();

  useEffect(() => {
    AdminModule.adminController.fetchStatistics();
  }, []);

  return (
    <div className="w-full h-full ">
      <Header1>داشبورد</Header1>

      <main className="w-full   pt-10 px-5 flex flex-wrap gap-4 ">
        <Card1
          row1Val="تعداد محصولات"
          row2Val={AdminModule.adminService.statistics.productCount}
        />
        <Card1
          row1Val="تعداد کاربران"
          row2Val={AdminModule.adminService.statistics.userCount}
        />
      </main>
    </div>
  );
}

export default Dashboard;
