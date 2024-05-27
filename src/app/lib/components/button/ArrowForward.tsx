import { FunctionComponent } from 'react';
import { IoIosArrowForward } from 'react-icons/io';

interface ArrowForwardProps {
  onClick: () => void;
  className?: string;
}

const ArrowForward: FunctionComponent<ArrowForwardProps> = ({
  onClick,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={`${className} w-10 h-10 rounded-full bg-white md:flex sm:hidden items-center justify-center border border-gray-300 cursor-pointer`}
    >
      <IoIosArrowForward />
    </button>
  );
};

export default ArrowForward;
