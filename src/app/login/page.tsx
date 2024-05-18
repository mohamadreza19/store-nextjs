"use client";
import { UserLogin } from "@/lib/components";
import React, {
  FunctionComponent,
  ReactEventHandler,
  useEffect,
  useState,
} from "react";
import LoginModule, { useLoginInjection } from "./login.module";
import InputText1 from "@/lib/components/form/InputText1";
import Image from "next/image";

import { MdArrowBack, MdArrowForward } from "react-icons/md";
import { ApiCallStatus } from "@/lib/shared/interfaces";

interface LoginProps {}
interface Step {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  sendVerifyCode?: (email: string) => void;
  submit: () => void;
  email?: string;
  apiCallStatus?: ApiCallStatus;
}

const Login: FunctionComponent<LoginProps> = () => {
  const { authService, authController } = useLoginInjection();
  const apiCallStatus = authService.getApiStatus();
  const [step, setStep] = useState<number>(0);
  const [email, setEmail] = useState<string>("");
  console.log(apiCallStatus);
  function handleSetStep() {
    authController.sendVerifyCode(email);
  }
  useEffect(() => {
    authController.stepIncrement(setStep);
  }, []);

  switch (step) {
    case 1:
      return (
        <Step1
          apiCallStatus={apiCallStatus}
          sendVerifyCode={authController.sendVerifyCode}
          onChange={(e) => authController.handleEmailChange(setEmail, e)}
          submit={handleSetStep}
        />
      );
    case 2:
      return <Step2 email={email} onChange={() => {}} submit={handleSetStep} />;
  }
};

export default () => (
  <LoginModule>
    <Login />
  </LoginModule>
);
// export default () => <div className="fixed">asdsa</div>;
const Step1 = (props: Step) => {
  return (
    <div className="md:w-[400px] sm:w-full fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-8 flex gap-y-4 flex-col items-center justify-center border-solid md:border rounded-md boder-gray-300">
      <Image alt="logo" width={150} height={40} src="/asset/img/logo.svg" />
      <p className="text-lg font-semibold self-start pb-2">ورود | ثبت‌نام</p>
      <p className="text-xs font-normal self-start">
        <p className="">سلام!</p>
        <br />
        لطفا ایمیل خود را وارد کنید
      </p>
      <div className="w-full">
        <input
          onChange={props.onChange}
          className="w-full px-3  py-[0.70rem] border border-solid rounded-md border-gray-400 focus:outline-none focus:ring-1"
          type="text"
        />
      </div>
      <button
        onClick={props.submit}
        className="w-full mt-3 bg-rose-600 px-4 py-[0.8rem] text-sm font-bold rounded-md text-white"
      >
        ورود
      </button>
      <p className="text-xs  font-normal">
        ورود شما به معنای پذیرش
        <span className="text-sky-400"> شرایط دیجی‌کالا </span>و
        <span className="text-sky-400"> قوانین حریم‌خصوصی </span>
      </p>
    </div>
  );
};
const Step2 = (props: Step) => {
  return (
    <div className="md:w-[400px] sm:w-full fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-8 flex gap-y-4 flex-col items-center justify-center border-solid md:border rounded-md boder-gray-300">
      <div className="flex justify-center relative w-full">
        <MdArrowForward className="absolute right-0 w-6 h-6 cursor-pointer" />
        <Image alt="logo" width={150} height={40} src="/asset/img/logo.svg" />
      </div>
      <p className="text-lg font-semibold self-start pb-2">
        کد تایید را وارد کنید
      </p>
      <p className="text-xs font-normal self-start">
        کد تایید برای {props.email} ارسال شد
      </p>
      <div className="w-full">
        <input
          className="w-full px-3  py-[0.70rem] border border-solid rounded-md border-gray-400 focus:outline-none focus:ring-1"
          type="text"
        />
      </div>
      <button
        onClick={props.submit}
        className="w-full mt-3 bg-rose-600 px-4 py-[0.8rem] text-sm font-bold rounded-md text-white"
      >
        ورود
      </button>
      <p className="text-xs  font-normal">
        ورود شما به معنای پذیرش
        <span className="text-sky-400"> شرایط دیجی‌کالا </span>و
        <span className="text-sky-400"> قوانین حریم‌خصوصی </span>
      </p>
    </div>
  );
};
