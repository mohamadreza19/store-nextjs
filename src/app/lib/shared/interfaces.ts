import { ButtonHTMLAttributes, ReactNode, SetStateAction } from "react";

export interface ModuleProps {
  children: ReactNode;
  // renderSharedUi?: boolean;
}
export abstract class ModuleFactory {
  static createInstances(): any {}
}

export type SetPage = (value: SetStateAction<number>) => void;
export type SetHasNextPage = (value: SetStateAction<boolean>) => void;
export type SetSearch = (value: SetStateAction<string>) => void;

export interface ApiCallStatus {
  status: "success" | "error" | "idle" | "loading";

  error?: {
    statusCode: number;
    message: string;
  };
}

export interface UserLoginStep {
  sendVerifyCode?: (email: string) => void;
  submit: (value: string) => void;
  secondSubmit?: () => void;
  increment?: () => void;
  decrement?: () => void;
  email?: string;
  apiCallStatus: ApiCallStatus;
}

export interface Button extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  loading: boolean;
}

export enum AxiosErrorStatus {
  BAD_REQUEST = 400,
}
