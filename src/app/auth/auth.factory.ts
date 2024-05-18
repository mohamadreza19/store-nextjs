import AuthService from "./auth.service";
import AuthController from "./auth.controller";
import AuthApiService from "./auth.api";
import { AuthInjectionEntities } from "./interfaces";
import { ModuleFactory } from "@/lib/shared/interfaces";

class AuthFactory implements ModuleFactory {
  static createInstances(): AuthInjectionEntities {
    const authService = new AuthService();

    const authController = new AuthController(
      authService,
      new AuthApiService()
    );
    return {
      authService,
      authController,
    };
  }
}
export default AuthFactory;
