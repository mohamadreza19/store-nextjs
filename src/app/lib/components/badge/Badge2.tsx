import Image from "next/image";
import { FunctionComponent, ReactNode } from "react";

interface Badge1Props {
  children: ReactNode;
}

const Badge2: FunctionComponent<Badge1Props> = ({ children }) => {
  return (
    <div className=" flex items-center justify-center text-base font-bold text-neutral-700">
      {children}
      <Image
        className="ms-1 !w-4 !h-4"
        width={18}
        height={18}
        src={"/asset/img/toman.svg"}
        alt=""
        unoptimized
      />
    </div>
  );
};

export default Badge2;
