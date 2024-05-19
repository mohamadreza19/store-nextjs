import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import AuthFactory from "../auth/auth.factory";
import { LoginInjectionEntities } from "./interfaces";
import { ModuleFactory } from "@lib/shared/interfaces";

class LoginFactory implements ModuleFactory {
  static createInstances(router: AppRouterInstance): LoginInjectionEntities {
    return AuthFactory.createInstances(router);
  }
}
export default LoginFactory;
