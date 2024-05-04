"use client";

import { Form1 } from "@lib/components";

import React, { useEffect } from "react";
import { useAdminInjection } from "../admin.module";

interface LoginProps {}

interface LoginState {}

function Login() {
  const AdminModule = useAdminInjection();

  useEffect(() => {
    AdminModule.adminController.redirectToDashboardIfAuthorized();
  }, []);

  return <Form1 handleFormSubmit={AdminModule.adminController.handleLogin} />;
}

export default Login;
