import { FunctionComponent } from 'react';
import { IoIosArrowBack } from 'react-icons/io';

interface ArrowBackProps {
  onClick: () => void;
}

const ArrowBack: FunctionComponent<ArrowBackProps> = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-gray-300 cursor-pointer"
    >
      <IoIosArrowBack />
    </div>
  );
};

export default ArrowBack;
