import { FunctionComponent, HtmlHTMLAttributes } from "react";
import { BiLogIn, BiLogInCircle } from "react-icons/bi";
import { CgLogIn } from "react-icons/cg";
import { FiLogIn } from "react-icons/fi";
import { HiLogin } from "react-icons/hi";
import { IoMdLogIn } from "react-icons/io";
import { IoLogIn } from "react-icons/io5";
import { LuLogIn } from "react-icons/lu";
import { MdLogin } from "react-icons/md";

interface NavbarAuthBtnProps extends HtmlHTMLAttributes<HTMLButtonElement> {}

const NavbarAuthBtn: FunctionComponent<NavbarAuthBtnProps> = ({ ...rest }) => {
  return (
    <button
      {...rest}
      className="w-[134.81px] h-[40px] flex gap-x-1 py-2 px-4 text-[12px] font-semibold border border-solid border-gray-300  rounded-lg"
    >
      <MdLogin className="rotate-180 me-1" size={20} />
      ورود | ثبت نام
    </button>
  );
};

export default NavbarAuthBtn;
