import { ButtonHTMLAttributes, FunctionComponent, ReactNode } from "react";
import { PulseLoader } from "react-spinners";
import PulseLoader2 from "../loading/PulseLoader2";
import { Button } from "../../shared/interfaces";

interface ButtonPrimaryProps extends Button {
  children: ReactNode;
  loading: boolean;
}

const ButtonPrimary: FunctionComponent<ButtonPrimaryProps> = ({
  children,
  loading,
  ...rest
}) => {
  return (
    <button
      {...rest}
      // onClick={props.submit}
      className="w-full mt-3 d-flex justify-center items-center bg-rose-600 px-4 py-[0.8rem] text-sm font-bold rounded-md text-white"
    >
      {loading ? <PulseLoader2 /> : children}
    </button>
  );
};

export default ButtonPrimary;
