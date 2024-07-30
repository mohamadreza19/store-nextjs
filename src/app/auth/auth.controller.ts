import { AlertService, TokenStorageService } from "@lib/services";
import AuthApiService from "./auth.api";
import AuthService from "./auth.service";
import { SetEmail, SetFormikErrorField, SetStep } from "./interfaces";
import { NextRouter } from "next/router";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { AxiosError } from "axios";
import { AxiosErrorStatus } from "../lib/shared/interfaces";
import UsersService from "../users/users.service";
import UsersController from "../users/users.controller";

class AuthController {
  constructor(
    private authService: AuthService,
    private usersService: UsersService,
    private usersController: UsersController,
    private authApiService: AuthApiService,
    private tokenStorageService: TokenStorageService,
    private alertService: AlertService,
    private router: AppRouterInstance
  ) {}
  stepDecrement = (setStep: SetStep) => {
    setStep((prev) => (prev > 1 ? 1 : prev - 1));
  };
  stepIncrement = (setStep: SetStep) => {
    setStep((prev) => (prev > 1 ? 1 : prev + 1));
  };
  handleEmailChange = (
    setEmail: SetEmail,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEmail(e.target.value);
  };

  sendOtpCode = async (
    email: string,
    setEmail: SetEmail,
    setFormikEmailErrorField: SetFormikErrorField,
    setStep: SetStep
  ) => {
    try {
      setEmail(email);
      const result = await this.authApiService.sendVerifyCode(email);
      this.stepIncrement(setStep);
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.status == AxiosErrorStatus.BAD_REQUEST) {
          setFormikEmailErrorField("email", "ایمیل نادرست است.");
        }
      }
    }
  };

  verifyOtp = async (code: string) => {
    try {
      const { accessToken, refreshToken } =
        await this.authApiService.VerifyCode(code);

      this.tokenStorageService.setRefreshToken(refreshToken);
      this.tokenStorageService.setAccessToken(accessToken.token);
      this.tokenStorageService.setAccessTokenExpire(
        String(accessToken.expiresIn)
      );
      this.usersService.changeAuthenticationStatus(true);
      await this.usersController.fetchUserCoreInfo();
      this.router.push("/");
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.status == AxiosErrorStatus.BAD_REQUEST) {
          this.alertService.addDismissAlert({
            open: true,
            message: "کد وارد شده اشتباه است ",
            type: "black",
          });
        }
      }
    }
  };
  tokenExpireInterceptor = () => {
    console.log("tokenExpireInterceptor");
    const numberified = Number(this.tokenStorageService.getAccessTokenExpire());
    const now = new Date();
    if (!numberified || numberified < now.getMilliseconds()) {
      this.tokenStorageService.setAccessToken("");
      this.usersService.changeAuthenticationStatus(false);
    } else {
      this.usersService.changeAuthenticationStatus(true);
    }
  };
  authorizeUserBasedTokenExist = () => {
    if (
      this.tokenStorageService.getAccessToken() &&
      this.tokenStorageService.getRefreshToken()
    ) {
      this.router.push("/");
    } else {
      this.router.push("/login");
    }
  };
  handleLogOut = () => {
    this.tokenStorageService.setAccessToken("");
    this.tokenStorageService.setRefreshToken("");
    this.tokenStorageService.setAccessTokenExpire("");

    this.usersService.reInitial();
  };

  refreshOtpCode = async (email: string) => {
    const result = await this.authApiService.sendVerifyCode(email);
  };
}
export default AuthController;
