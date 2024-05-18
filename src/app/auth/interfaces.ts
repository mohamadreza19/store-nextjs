import AuthService from "./auth.service";
import AuthController from "./auth.controller";
import { Dispatch, SetStateAction } from "react";
export type AuthResponse = {};
export type AuthVerifyCodeResponse = {
  message: string;
  userRegistered: boolean;
};

export type SetStep = Dispatch<SetStateAction<number>>;
export type SetEmail = Dispatch<SetStateAction<string>>;

export interface AuthInjectionEntities {
  authService: AuthService;
  authController: AuthController;
}
