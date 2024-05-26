import { FunctionComponent } from "react";
import { IoIosArrowUp } from "react-icons/io";

interface MoveUpOutlineProps {
  onClick: () => void;
}

const MoveUpOutline: FunctionComponent<MoveUpOutlineProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-3 py-2 h-9 flex items-center justify-center gap-x-2  text-xs font-semibold bg-white border border-solid border-neutral-200 text-neutral-500 rounded-md"
    >
      بازگشت به بالا
      <IoIosArrowUp size={19} />
    </button>
  );
};

export default MoveUpOutline;
