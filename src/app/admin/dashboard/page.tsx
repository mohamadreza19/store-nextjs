"use client";
import Header1 from "@lib/components/header/Header1";
import Card1 from "@lib/components/card/Card1";

import React from "react";

interface DashboardProps {}

interface DashboardState {}

class Dashboard extends React.Component<DashboardProps, DashboardState> {
  constructor(props: DashboardProps) {
    super(props);
    // this.state = { :  };
  }
  render() {
    return (
      <div className="w-full h-full ">
        <Header1>داشبورد</Header1>

        <main className="w-full   pt-10 px-5 flex flex-wrap gap-4 ">
          <Card1 row1Val="تعداد محصولات" row2Val="20" />
          <Card1 row1Val="تعداد کاربران" row2Val="50" />
        </main>
      </div>
    );
  }
}

export default Dashboard;
