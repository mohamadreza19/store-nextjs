'use client';

import { useFormik } from 'formik';
import { FunctionComponent, InputHTMLAttributes } from 'react';

interface InputText1Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const InputText1: FunctionComponent<InputText1Props> = ({
  label,
  error,
  ...rest
}) => {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit(values, formikHelpers) {
      if (!values.email) {
        formikHelpers.setFieldError('email', 'لطفا این قسمت را خالی نگذارید');
      }
    },
  });
  return (
    <div className="w-full">
      <input
        {...rest}
        className={`w-full px-3  py-[0.70rem] border border-solid rounded-md ${
          error ? 'border-red-700' : 'border-gray-400'
        } focus:outline-none focus:ring-1`}
        type="text"
      />
      <span className=" text-xs font-medium text-red-700 ">{error}</span>
    </div>
  );
};

export default InputText1;
