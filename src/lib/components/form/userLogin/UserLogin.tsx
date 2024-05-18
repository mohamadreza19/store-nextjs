"use client";
import Image from "next/image";
import React, { FunctionComponent } from "react";
import InputText1 from "../InputText1";

interface UserLoginProps {}

interface UserLoginState {}

function UserLogin() {
  return (
    <div className="md:w-[400px] sm:w-full fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-8 flex flex-col items-center justify-center border-solid md:border-2 rounded-md boder-gray-300">
      <Image alt="logo" width={150} height={40} src="/asset/img/logo.svg" />

      <InputText1 />
    </div>
  );
}

export default UserLogin;
