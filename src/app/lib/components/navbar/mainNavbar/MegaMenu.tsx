import { FunctionComponent, useEffect, useRef } from "react";
import { IoMenu } from "react-icons/io5";
import Navitem from "./Navitem";

interface MegaMenuProps {}

const MegaMenu: FunctionComponent<MegaMenuProps> = () => {
  return (
    <Navitem borderB_Dir="left">
      <IoMenu size={20} />
      <p className="text-sm font-semibold">دسته‌بندی کالاها</p>

      <div className="ms-1 inline-block h-[15px] min-h-[1em] w-[1px] self-stretch bg-gray-300 dark:bg-white/10"></div>
    </Navitem>
  );
};

export default MegaMenu;
