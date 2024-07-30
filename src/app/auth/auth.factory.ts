import AuthService from "./auth.service";
import AuthController from "./auth.controller";
import AuthApiService from "./auth.api";
import { AuthInjectionEntities } from "./interfaces";
import { ModuleFactory } from "@lib/shared/interfaces";
import { AlertService, TokenStorageService } from "@lib/services";

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import UsersService from "../users/users.service";
import UsersController from "../users/users.controller";
import UsersFactory from "../users/users.factory";

class AuthFactory implements ModuleFactory {
  private static singletonInstance: AuthInjectionEntities | null;
  static createInstances(router: AppRouterInstance): AuthInjectionEntities {
    if (!this.singletonInstance) {
      const authService = new AuthService();
      const { usersController, usersService } = UsersFactory.createInstances();
      const authController = new AuthController(
        authService,
        usersService,
        usersController,
        new AuthApiService(),
        new TokenStorageService(),
        new AlertService(),
        router
      );
      this.singletonInstance = {
        authService,
        authController,
      };
    }

    return this.singletonInstance;
  }
}
export default AuthFactory;
