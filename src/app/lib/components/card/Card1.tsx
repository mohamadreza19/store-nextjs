import Image from "next/image";
import LocaledNumber from "../LocaledNumber";
import { FC } from "react";

interface Card1Props {
  text: string;
  src: string;
}
const _c_1 = "";
const Card1: FC<Card1Props> = ({ text, src }) => {
  return (
    <div className="flex items-center justify-center flex-col gap-y-2">
      <div className="w-28 h-28">
        <Image width={100} height={100} alt="" src={src} objectFit="contain" />
      </div>
      <p className="text-xs text-neutral-700 font-bold">{text}</p>
    </div>
  );
};

export default Card1;
