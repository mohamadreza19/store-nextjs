'use client';
import { UserLogin, VerifyCode } from '@/lib/components';
import React, {
  FunctionComponent,
  ReactEventHandler,
  useEffect,
  useState,
} from 'react';
import LoginModule, { useLoginInjection } from './login.module';
import InputText1 from '@/lib/components/form/InputText1';
import Image from 'next/image';

import { MdArrowBack, MdArrowForward } from 'react-icons/md';
import { ApiCallStatus } from '@/lib/shared/interfaces';

interface LoginProps {}
interface Step {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  sendVerifyCode?: (email: string) => void;
  submit: (email: string) => void;
  email?: string;
  apiCallStatus?: ApiCallStatus;
}

const Login: FunctionComponent<LoginProps> = () => {
  const { authService, authController } = useLoginInjection();
  const apiCallStatus = authService.getApiStatus();
  const [step, setStep] = useState<number>(1);
  const [email, setEmail] = useState<string>('');

  function sendOtpCode(email: string) {
    authController.sendOtpCode(email, setEmail);
    stepIncrement();
  }
  function RefreshOtpCode() {
    authController.sendOtpCode(email, setEmail);
  }
  function stepIncrement() {
    authController.stepIncrement(setStep);
  }
  function stepDecrement() {
    authController.stepDecrement(setStep);
  }
  // useEffect(() => {
  //   stepIncrement();
  // }, []);
  // return (
  //   <span className=" text-center text-sky-700 cursor-pointer font font-semibold">
  //     da
  //   </span>
  // );
  switch (step) {
    case 1:
      return (
        <UserLogin
          apiCallStatus={apiCallStatus}
          onChange={(e) => authController.handleEmailChange(setEmail, e)}
          submit={sendOtpCode}
        />
      );
    case 2:
      return (
        <VerifyCode
          email={email}
          onChange={() => {}}
          submit={(e) => {}}
          secondSubmit={RefreshOtpCode}
          decrement={stepDecrement}
        />
      );
  }
};

export default () => (
  <LoginModule>
    <Login />
  </LoginModule>
);
// export default () => <div className="fixed">asdsa</div>;