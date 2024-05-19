import { AlertService, TokenStorageService } from "@lib/services";
import AuthApiService from "./auth.api";
import AuthService from "./auth.service";
import { SetEmail, SetStep } from "./interfaces";
import { NextRouter } from "next/router";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { AxiosError } from "axios";
import { AxiosErrorStatus } from "../lib/shared/interfaces";

class AuthController {
  constructor(
    private authService: AuthService,
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

  sendOtpCode = async (email: string, setEmail: SetEmail) => {
    setEmail(email);
    const result = await this.authApiService.sendVerifyCode(email);
  };

  verifyOtp = async (code: string) => {
    try {
      const { accessToken, refreshToken } =
        await this.authApiService.VerifyCode(code);

      this.tokenStorageService.setRefreshToken(refreshToken);
      this.tokenStorageService.setAccessToken(accessToken);
      console.log(this.router);
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
}
export default AuthController;
