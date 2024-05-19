import AuthApiService from './auth.api';
import AuthService from './auth.service';
import { SetEmail, SetStep } from './interfaces';

class AuthController {
  constructor(
    private authService: AuthService,
    private authApiService: AuthApiService
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

  verifyOtp(code: string) {}
}
export default AuthController;
