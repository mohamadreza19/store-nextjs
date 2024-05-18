import AuthApiService from "./auth.api";
import AuthService from "./auth.service";
import { SetEmail, SetStep } from "./interfaces";

class AuthController {
  constructor(
    private authService: AuthService,
    private authApiService: AuthApiService
  ) {}
  stepIncrement = (setStep: SetStep) => {
    setStep((prev) => prev + 1);
  };
  handleEmailChange = (
    setEmail: SetEmail,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEmail(e.target.value);
  };

  sendVerifyCode = async (email: string) => {
    const result = await this.authApiService.sendVerifyCode(email);
  };
}
export default AuthController;
