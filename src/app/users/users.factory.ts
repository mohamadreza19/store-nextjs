import UsersService from "./users.service";
import UsersController from "./users.controller";
import UsersApiService from "./users.api";
import { UsersInjectionEntities } from "./interfaces";
import { ModuleFactory } from "../lib/shared/interfaces";

class UsersFactory implements ModuleFactory {
  static createInstances(): UsersInjectionEntities {
    const usersService = new UsersService();
    const usersController = new UsersController(usersService);
    return {
      usersService,
      usersController,
    };
  }
}
export default UsersFactory;
