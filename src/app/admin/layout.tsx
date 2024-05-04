"use client";
import React, { ReactNode, useEffect, useState } from "react";

import AdminModule from "./admin.module";

const PATHS = ["login"];
interface RootProps {
  children: ReactNode;
}

export default function RootLayout(props: RootProps) {
  return <AdminModule useAdminSharedUi>{props.children}</AdminModule>;
  // return <div>{props.children}</div>;
}
