'use client';
import React, { ReactNode, useEffect, useState } from 'react';
import { AdminSideBar } from '@lib/components';

import { usePathname } from 'next/navigation';
import isPathInArray from '@lib/services/isPathInArray';
import ContextProvider, {
  AdminLocalContextAction,
  useAdminLocalContext,
} from './admin.context';

const PATHS = ['login'];
interface RootProps {
  children: ReactNode;
}

export default function RootLayout(props: RootProps) {
  // const { state ,dispatch} = useAdminLocalContext();
  // const pathname = usePathname();
  // state.shouldRenderSharedSideBar;
  // useEffect(() => {
  //   const result = isPathInArray(pathname, PATHS);
  //   if(result){
  //     dispatch(AdminLocalContextAction.)
  //   }
  // });

  return <ContextProvider>{props.children}</ContextProvider>;
}
