"use client";
import React, { ReactNode, useEffect, useState } from "react";
import { AdminSideBar } from "@lib/components";

import { usePathname } from "next/navigation";
import isPathInArray from "@lib/services/isPathInArray";

const PATHS = ["login"];
interface RootProps {
  children: ReactNode;
}
type ShouldRenderSharedUi = boolean;

function RootLayout(props: RootProps) {
  const [state, setState] = useState<ShouldRenderSharedUi>(false);
  const pathname = usePathname();

  useEffect(() => {
    const result = isPathInArray(pathname, PATHS);
    setState(result);
  });

  return (
    <main className="flex w-full h-screen">
      {!state && <AdminSideBar />}
      <div className="pt-4 px-2 w-full">{props.children}</div>
    </main>
  );
}

export default RootLayout;
