import UsersService from "./users.service";
import UsersController from "./users.controller";
import UsersApiService from "./users.api";
import { UsersInjectionEntities } from "./interfaces";
import { ModuleFactory } from "../lib/shared/interfaces";

class UsersFactory implements ModuleFactory {
  private static singletonInstance: UsersInjectionEntities | null;

  static createInstances(): UsersInjectionEntities {
    if (!this.singletonInstance) {
      const usersService = new UsersService();
      const usersController = new UsersController(
        usersService,
        new UsersApiService()
      );

      this.singletonInstance = {
        usersService,
        usersController,
      };
    }
    return this.singletonInstance;
  }
}
export default UsersFactory;
