import Link from "next/link";
import { ElementType, FunctionComponent, ReactNode } from "react";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineLogout } from "react-icons/hi";
import { IoMdHeartEmpty } from "react-icons/io";
import { LuLogOut } from "react-icons/lu";
import {
  MdArrowBackIos,
  MdArrowDropDown,
  MdLogout,
  MdOutlinePersonOutline,
  MdOutlineShoppingBag,
} from "react-icons/md";
import { SlDirection } from "react-icons/sl";
import { useModal } from "../../services";

interface PersionAuthenticatedProps {
  username: string;
  onClickLogout: () => void;
}

const PersionAuthenticated: FunctionComponent<PersionAuthenticatedProps> = ({
  username,
  onClickLogout,
}) => {
  const { triggerRef, ModalContainer, open } = useModal({});
  const list: MenuItemProps[] = [
    {
      SecondIcon: () => <MdArrowBackIos size={15} />,
      link: "",
      text: username,
    },
    {
      Icon: () => <MdOutlineShoppingBag size={22} />,
      link: "",
      text: "سفارش ها",
    },
    {
      Icon: () => <FaRegHeart size={20} />,
      link: "",
      text: "لیست ها",
    },
    {
      onClick: onClickLogout,
      Icon: () => <HiOutlineLogout size={22} />,
      link: "",
      text: "خروج از حساب کاربری",
    },
  ];

  return (
    <>
      <div className="relative">
        <section
          className={`${
            open && "bg-red-50 rounded-md"
          } p-2 cursor-pointer flex relative`}
        >
          <button ref={triggerRef}>
            <svg
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
            >
              <defs>
                <symbol
                  id="profileOff"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 2a5 5 0 015 5v1A5 5 0 017 8V7a5 5 0 015-5zm9.996 18.908C21.572 16.318 18.096 14 12 14c-6.095 0-9.572 2.318-9.996 6.908A1 1 0 003 22h18a1 1 0 00.996-1.092zM4.188 20c.728-2.677 3.231-4 7.812-4 4.58 0 7.084 1.323 7.812 4H4.188zM9 7a3 3 0 116 0v1a3 3 0 01-6 0V7z"
                    clip-rule="evenodd"
                  ></path>
                </symbol>
              </defs>
              <use xlinkHref="#profileOff"></use>
            </svg>
          </button>

          <MdArrowDropDown size={20} />
        </section>
        <section>
          <ModalContainer>
            <Menu list={list} />
          </ModalContainer>
        </section>
      </div>
    </>
  );
};
interface MenuProps {
  list: MenuItemProps[];
}

const Menu: FunctionComponent<MenuProps> = ({ list }) => {
  return (
    <ul className="w-[256px] overflow-hidden rounded-lg shadow-md absolute left-0  bg-white  ">
      {list.map((item, i) => (
        <MenuItem key={i} {...item} />
      ))}
    </ul>
  );
};

interface MenuItemProps {
  Icon?: ElementType;
  SecondIcon?: ElementType;
  text?: string;
  link?: string;
  onClick?: () => void;
}
const menuItemClass =
  "relative px-4 py-4 flex items-center gap-x-3   text-[14px] font-semibold justify-between text-gray-700 cursor-pointer hover:bg-gray-100";
const MenuItem: FunctionComponent<MenuItemProps> = ({
  Icon,
  SecondIcon,
  link,
  text,
  onClick,
}) => {
  const ConditionContainer: FunctionComponent<{ children: ReactNode }> = ({
    children,
  }) => {
    if (link) {
      return (
        <Link
          onClick={onClick}
          className={menuItemClass + ` ${!SecondIcon && "!justify-normal"}`}
          href={link}
        >
          {children}
        </Link>
      );
    } else {
      return (
        <div
          onClick={onClick}
          className={menuItemClass + ` ${!SecondIcon && "!justify-normal"}`}
        >
          {children}
        </div>
      );
    }
  };
  return (
    <ConditionContainer>
      {Icon && <Icon />}
      {text}
      {SecondIcon && <SecondIcon />}
      <div className="absolute h-[1px] w-11/12 bg-gray-100 bottom-0"></div>
    </ConditionContainer>
  );
};

export default PersionAuthenticated;
