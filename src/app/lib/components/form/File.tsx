import { useField } from "formik";
import { Button1 } from "../button";
import React, { ChangeEvent } from "react";

interface FileInputProps {
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  file: File | null;
}

const FileInput: React.FC<FileInputProps> = ({ name, onChange, file }) => {
  // function onChangeFile(event: React.ChangeEvent<HTMLInputElement>) {
  //   // formik.setFieldValue('file', event.currentTarget.files[0]);
  //   if (event.currentTarget.files) {
  //     console.log(event.currentTarget.files[0]);
  //   }
  // }
  function clickHiddenInput() {
    const el = document.querySelector(
      `input[name=${name}]`
    ) as HTMLInputElement;

    el.click();
  }
  return (
    <div
      id="default_size"
      className="flex items-center p-1  w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
    >
      <Button1 onClick={clickHiddenInput} children="انتخاب فایل" />
      <input type="file" name={name} onChange={onChange} className="hidden" />
      <p className="mt-1 ms-1 text-sm scrollbar-hide overflow-x-auto overflow-y-hidden whitespace-nowrap text-gray-500 dark:text-gray-300">
        {file && file.name}
      </p>
    </div>
  );
};

export default FileInput;
