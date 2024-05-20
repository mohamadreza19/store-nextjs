import AuthService from "./auth.service";
import AuthController from "./auth.controller";
import { Dispatch, SetStateAction } from "react";
export type AuthResponse = {};
export type AuthSendVerifyCodeResponse = {
  message: string;
  userRegistered: boolean;
};
export type AuthVerifyCodeResponse = {
  accessToken: string;
  refreshToken: string;
};

export type SetStep = Dispatch<SetStateAction<number>>;
export type SetEmail = Dispatch<SetStateAction<string>>;
export type SetFormikErrorField = (
  field: string,
  value: string | undefined
) => void;
export interface AuthInjectionEntities {
  authService: AuthService;
  authController: AuthController;
}
