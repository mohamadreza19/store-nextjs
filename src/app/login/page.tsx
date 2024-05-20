"use client";
import { UserLogin, VerifyCode } from "@lib/components";
import React, {
  FunctionComponent,
  ReactEventHandler,
  useEffect,
  useState,
} from "react";
import LoginModule, { useLoginInjection } from "./login.module";

import { ApiCallStatus } from "@lib/shared/interfaces";
import { SetFormikErrorField } from "../auth/interfaces";

interface LoginProps {}

const Login: FunctionComponent<LoginProps> = () => {
  const { authService, authController } = useLoginInjection();
  const apiCallStatus = authService.getApiStatus();
  const [step, setStep] = useState<number>(1);
  const [email, setEmail] = useState<string>("");

  function sendOtpCode(
    email: string,
    setFormikEmailErrorField: SetFormikErrorField
  ) {
    authController.sendOtpCode(
      email,
      setEmail,
      setFormikEmailErrorField,
      setStep
    );
  }
  function RefreshOtpCode() {
    authController.refreshOtpCode(email);
  }
  function stepIncrement() {
    authController.stepIncrement(setStep);
  }
  function stepDecrement() {
    authController.stepDecrement(setStep);
  }

  switch (step) {
    case 1:
      return <UserLogin apiCallStatus={apiCallStatus} submit={sendOtpCode} />;
    case 2:
      return (
        <VerifyCode
          apiCallStatus={apiCallStatus}
          email={email}
          submit={authController.verifyOtp}
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
