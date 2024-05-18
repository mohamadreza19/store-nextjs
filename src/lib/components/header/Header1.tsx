import { ReactNode } from "react";

interface Header1Props {
  children: ReactNode;
}

function Header1(props: Header1Props) {
  return (
    <header className=" pb-3 text-xl font-semibold border-b-2 border-gray-700">
      {props.children}
    </header>
  );
}

export default Header1;
