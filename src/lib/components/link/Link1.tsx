"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode } from "react";

interface Link1Props {
  children: ReactNode;
  href: string;
  // activeClasses: string;
  // className: string;
}

function Link1(props: Link1Props) {
  const pathname = usePathname();
  const defaultClasses =
    "flex items-center px-4 py-2 mt-5 text-gray-400 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700";
  const defaultActiveClasses = " text-gray-700 bg-gray-100 ";
  const className = pathname.includes(props.href)
    ? defaultClasses + " " + defaultActiveClasses
    : defaultClasses;
  return (
    <Link href={props.href} className={className}>
      {props.children}
    </Link>
  );
}

export default Link1;
