'use client';
import Image from 'next/image';
import React, { FunctionComponent } from 'react';
import InputText1 from '../InputText1';
import { ApiCallStatus, UserLoginStep } from '@/lib/shared/interfaces';
import { useFormik } from 'formik';

interface UserLoginState {}

function UserLogin(props: UserLoginStep) {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit(values, formikHelpers) {
      if (!values.email)
        return formikHelpers.setFieldError(
          'email',
          'لطفا این قسمت را خالی نگذارید'
        );

      props.submit(values.email);
    },
  });

  return (
    <div className="md:w-[400px] sm:w-full fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-8 flex gap-y-4 flex-col items-center justify-center border-solid md:border rounded-md boder-gray-300">
      <Image alt="logo" width={150} height={40} src="/asset/img/logo.svg" />
      <p className=" text-lg font-semibold self-start pb-2">ورود | ثبت‌نام</p>
      <p className="text-xs font-normal self-start">
        <p className="">سلام!</p>
        <br />
        لطفا ایمیل خود را وارد کنید
      </p>
      <InputText1
        error={formik.errors.email || props.apiCallStatus?.error?.message}
        onChange={(e) => {
          formik.setFieldValue('email', e.target.value);
        }}
      />
      <button
        onClick={formik.submitForm}
        className="w-full mt-3 bg-rose-600 px-4 py-[0.8rem] text-sm font-bold rounded-md text-white"
      >
        ورود
      </button>
      <p className="text-xs  font-normal ">
        ورود شما به معنای پذیرش
        <span className="text-sky-400"> شرایط دیجی‌کالا </span>و
        <span className="text-sky-400"> قوانین حریم‌خصوصی </span>
      </p>
    </div>
  );
}

export default UserLogin;
