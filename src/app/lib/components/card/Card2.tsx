import { ReactNode } from "react";
import { CgClose } from "react-icons/cg";
import { FaClosedCaptioning } from "react-icons/fa";

type Props = {
  children: ReactNode;
};
export const Card2 = ({ children }: Props) => {
  return (
    <div className="relative ">
      <section className="w-fit h-fit p-1 m-2 cursor-pointer bg-gray-300 rounded-md hover:bg-gray-500">
        <CgClose />
      </section>
      <section className="border-x-2 border-gray-300">{children}</section>
    </div>
  );
};

export default Card2;
