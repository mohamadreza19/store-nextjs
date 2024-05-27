import { FunctionComponent } from 'react';
import { IoIosArrowBack } from 'react-icons/io';

interface ArrowBackProps {
  onClick: () => void;
  className?: string;
}

const ArrowBack: FunctionComponent<ArrowBackProps> = ({
  onClick,
  className,
}) => {
  return (
    <div
      onClick={onClick}
      className={`${className} w-10 h-10 rounded-full bg-white md:flex sm:hidden items-center justify-center border border-gray-300 cursor-pointer`}
    >
      <IoIosArrowBack />
    </div>
  );
};

export default ArrowBack;
