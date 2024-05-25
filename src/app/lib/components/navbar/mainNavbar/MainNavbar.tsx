import Image from "next/image";
import { FunctionComponent, useRef } from "react";
import { MainSearchInput } from "../../form";
import { NavbarAuthBtn } from "../../button";

import { LuShoppingCart } from "react-icons/lu";
import { CiBurger, CiPercent, CiShoppingBasket } from "react-icons/ci";
import { MdMenu } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import MegaMenu from "./megaMenu/MegaMenu";
import { BsPostcardHeart } from "react-icons/bs";
import Navitem from "./Navitem";
import { useRouter } from "next/navigation";
import { Category } from "@/app/categories/interfaces";

type Props = {
  mainCategories: Category[];
  subCategories: Category[];
  fetchSubCategoriesByParentId: (parentId: string) => Promise<void>;
};
const MainNavbar: FunctionComponent<Props> = (props) => {
  const filterScreenRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  function handleNavigateToLogin() {
    router.push("/login");
  }

  function handleOpenFilterScreen() {
    filterScreenRef.current?.classList.add("opacity-30");
    filterScreenRef.current?.classList.remove("invisible");
  }
  function handleCloseFilterScreen() {
    filterScreenRef.current?.classList.add("invisible");
    filterScreenRef.current?.classList.remove("opacity-30");
  }

  return (
    <>
      <header className="w-full h-[115px] relative drop-shadow md:px-5 md:pt-4 flex flex-col border-b border-solid border-gray-300 z-20">
        <div className=" w-full flex items-center ">
          <section className="w-full flex items-center gap-x-4">
            <Image
              width={115}
              height={30}
              alt="icon"
              src="/asset/img/logo.svg"
            />
            <MainSearchInput
              openFilterScreen={handleOpenFilterScreen}
              closeFilterScreen={handleCloseFilterScreen}
              placeHolder="جستجو"
            />
          </section>
          <section className="flex items-center">
            <NavbarAuthBtn onClick={handleNavigateToLogin} />

            <div className="w-[1px] h-[25px] bg-gray-300 ms-3"></div>

            <LuShoppingCart
              className="scale-x-[-1] ms-4 cursor-pointer"
              size={22}
            />
          </section>
        </div>
        <div className="flex gap-x-3 h-full pt-4 items-center">
          <Navitem
            onMouseEnter={handleOpenFilterScreen}
            onMouseLeave={handleCloseFilterScreen}
            borderB_Dir="left"
            id="mega-menu-parent"
          >
            <IoMenu size={20} />
            <p className="text-sm font-semibold">دسته‌بندی کالاها</p>

            <div className="ms-1 my-auto inline-block h-[15px] min-h-[1em] w-[1px] self-stretch bg-gray-300 dark:bg-white/10"></div>

            <MegaMenu
              id="mega-menu"
              subCategories={props.subCategories}
              fetchSubCategoriesByParentId={props.fetchSubCategoriesByParentId}
              mainCategories={props.mainCategories}
            />
          </Navitem>

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
      <div
        id="filterScreenRef"
        ref={filterScreenRef}
        className="transition-opacity opacity-0 h-screen invisible z-10 w-full bg-[#0c0c0c]  fixed top-[115px]  flex items-center justify-center"
      ></div>
    </>
  );
};

export default MainNavbar;
