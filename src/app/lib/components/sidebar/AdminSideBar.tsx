"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { MdDashboard, MdGroup, MdAdd, MdShoppingBag } from "react-icons/md";
import { Link1 } from "../link";

enum Routes {
  DASHBOARD = "dashboard",
  PRODUCT_ADD = "product-add",
}

interface SideBarProps {}

interface SideBarState {}

class AdminSideBar extends React.Component<SideBarProps, SideBarState> {
  readonly state: SideBarState;
  constructor(props: SideBarProps) {
    super(props);
    this.state = { tes: "" };
  }
  render() {
    return (
      <>
        <aside className="fixed flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto bg-gray-700 border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
          <div className="flex flex-col justify-between flex-1 mt-6">
            <nav>
              <Link1 href="dashboard">
                <MdDashboard />

                <span className="mx-4 font-medium">داشبورد</span>
              </Link1>

              <Link1 href="users">
                <MdGroup />

                <span className="mx-4 font-medium">کاربران</span>
              </Link1>
              <Link1 href="products">
                <MdShoppingBag />

                <span className="mx-4 font-medium">محصولات</span>
              </Link1>
            </nav>
          </div>
        </aside>
      </>
    );
  }
}

export default AdminSideBar;
