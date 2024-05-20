import AuthService from "./auth.service";
import AuthController from "./auth.controller";
import AuthApiService from "./auth.api";
import { AuthInjectionEntities } from "./interfaces";
import { ModuleFactory } from "@lib/shared/interfaces";
import { AlertService, TokenStorageService } from "@lib/services";

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

class AuthFactory implements ModuleFactory {
  static createInstances(router: AppRouterInstance): AuthInjectionEntities {
    const authService = new AuthService();

    const authController = new AuthController(
      authService,
      new AuthApiService(),
      new TokenStorageService(),
      new AlertService(),
      router
    );
    return {
      authService,
      authController,
    };
  }
}
export default AuthFactory;
