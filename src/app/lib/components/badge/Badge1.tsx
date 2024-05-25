import { FunctionComponent, ReactNode } from "react";

interface Badge1Props {
  children: ReactNode;
}

const Badge1: FunctionComponent<Badge1Props> = ({ children }) => {
  return (
    <div className="w-[34px] h-[20px] flex items-center justify-center rounded-lg bg-rose-600 text-white text-[11px] font-semibold">
      {children}
    </div>
  );
};

export default Badge1;
