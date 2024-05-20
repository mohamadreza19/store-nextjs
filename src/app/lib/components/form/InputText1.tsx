"use client";

import { useFormik } from "formik";
import { FunctionComponent, InputHTMLAttributes } from "react";

interface InputText1Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  onEnterDown: () => void;
}

const InputText1: FunctionComponent<InputText1Props> = ({
  label,
  error,
  onEnterDown,
  ...rest
}) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onEnterDown();
    }
  };

  return (
    <div className="w-full">
      <input
        onKeyDown={handleKeyDown}
        {...rest}
        className={`w-full px-3  py-[0.70rem] border border-solid rounded-md ${
          error ? "border-red-700" : "border-gray-400"
        } focus:outline-none focus:ring-1`}
        type="text"
      />
      <span className=" text-xs font-medium text-red-700 ">{error}</span>
    </div>
  );
};

export default InputText1;
