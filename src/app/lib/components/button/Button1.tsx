import { ReactNode } from "react";

interface Button1Props {
  children: ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function Button1(props: Button1Props) {
  return (
    <button
      {...props}
      data-modal-target="crud-modal"
      data-modal-toggle="crud-modal"
      className="flex items-center px-5 py-2 leading-5 max-w-fit text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-lg hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
      type="button"
    >
      {props.children}
    </button>
  );
}

export default Button1;
