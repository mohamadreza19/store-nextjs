'use client';

class CustomError extends Error {
  code: number;

  constructor(message: string, code: number) {
    super(message);
    this.code = code;
    // Ensure the prototype chain is set correctly
    // Object.setPrototypeOf(this, CustomError.prototype);
  }
}

import {
  AlertService,
  AuthApiService,
  LoadingService,
  TokenStorageService,
} from '@/app/lib/services';
import { Form1 } from '@lib/components';

import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

interface LoginProps {}

interface LoginState {}

function Login() {
  const dispatch = useDispatch();
  const alertService = new AlertService(dispatch);
  const loadingService = new LoadingService(dispatch);
  const authApiService = new AuthApiService();
  const tokenStorageService = new TokenStorageService();

  async function handleSubmit(values: any) {
    try {
      loadingService.addPluse();

      const result = await authApiService.login(values);

      tokenStorageService.setAccessToken(result.accessToken);
      tokenStorageService.setRefreshToken(result.refreshToken);

      loadingService.removePluse();
    } catch (error) {
      loadingService.removePluse();
      throw error;
    }
  }

  useEffect(() => {}, []);
  return <Form1 handleFormSubmit={handleSubmit} />;
}

export default Login;
