import AuthFactory from "../auth/auth.factory";
import { LoginInjectionEntities } from "./interfaces";
import { ModuleFactory } from "@/lib/shared/interfaces";

class LoginFactory implements ModuleFactory {
  static createInstances(): LoginInjectionEntities {
    return AuthFactory.createInstances();
  }
}
export default LoginFactory;
