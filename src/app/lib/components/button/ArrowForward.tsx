import { FunctionComponent } from 'react';
import { IoIosArrowForward } from 'react-icons/io';

interface ArrowForwardProps {
  onClick: () => void;
}

const ArrowForward: FunctionComponent<ArrowForwardProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-gray-300 cursor-pointer"
    >
      <IoIosArrowForward />
    </button>
  );
};

export default ArrowForward;
