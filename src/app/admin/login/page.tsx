"use client";

class CustomError extends Error {
  code: number;

  constructor(message: string, code: number) {
    super(message);
    this.code = code;
    // Ensure the prototype chain is set correctly
    // Object.setPrototypeOf(this, CustomError.prototype);
  }
}

import { AlertService, AuthApiService } from "@/app/lib/services";
import { Form1 } from "@lib/components";

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

interface LoginProps {}

interface LoginState {}

function Login() {
  const [body, setBody] = useState();
  const dispatch = useDispatch();
  const alertService = new AlertService(dispatch);
  const authApiService = new AuthApiService();
  useEffect(() => {
    async function login() {
      const result = await authApiService.login(body);
      // throw new CustomError("LALA", 2020);
    }
    login();
  }, []);
  return <Form1 />;
}

export default Login;
