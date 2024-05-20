import Image from "next/image";
import { FunctionComponent } from "react";
import { MainSearchInput } from "../../form";
import { NavbarAuthBtn } from "../../button";

import { LuShoppingCart } from "react-icons/lu";
import { CiBurger, CiPercent, CiShoppingBasket } from "react-icons/ci";
import { MdMenu } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import MegaMenu from "./MegaMenu";
import { BsPostcardHeart } from "react-icons/bs";
import Navitem from "./Navitem";

type Props = {};
const MainNavbar: FunctionComponent<Props> = () => {
  return (
    <header className="w-full h-[115px] drop-shadow md:px-5 md:pt-4 flex flex-col border-b border-solid border-gray-300">
      <div className=" w-full flex items-center ">
        <section className="w-full flex items-center gap-x-4">
          <Image width={115} height={30} alt="icon" src="/asset/img/logo.svg" />
          <MainSearchInput placeHolder="جستجو" />
        </section>
        <section className="flex items-center">
          <NavbarAuthBtn />

          <div className="w-[1px] h-[25px] bg-gray-300 ms-3"></div>

          <LuShoppingCart
            className="scale-x-[-1] ms-4 cursor-pointer"
            size={22}
          />
        </section>
      </div>
      <div className="flex gap-x-3 h-full pt-4 items-center">
        <MegaMenu />

        <Navitem>
          <CiPercent size={18} className="fill-neutral-700" />
          شگفت‌انگیزها
        </Navitem>
        <Navitem>
          <CiShoppingBasket size={18} className="fill-green-800" />
          سوپرمارکت
        </Navitem>
        <Navitem>
          <BsPostcardHeart size={18} className="fill-neutral-700" />
          کارت هدیه
        </Navitem>
      </div>
    </header>
  );
};

export default MainNavbar;
