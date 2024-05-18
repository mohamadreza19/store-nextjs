"use client";

import { FunctionComponent, InputHTMLAttributes } from "react";

interface InputText1Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const InputText1: FunctionComponent<InputText1Props> = ({ label, ...rest }) => {
  return (
    <div className="w-full">
      <input
        className="w-full px-4 py-2 border-solid border-1 border-sky-200"
        {...rest}
        type="text"
      />
    </div>
  );
};

export default InputText1;
