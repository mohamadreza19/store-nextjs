import UsersService from "./users.service";
import UsersController from "./users.controller";
export type UsersCoreInfoResponse = {
  createAt?: string;
  email?: string;
  password?: null | string;
  role?: string;
  username?: string;
  _id?: string;
};

export interface UsersInjectionEntities {
  usersService: UsersService;
  usersController: UsersController;
}
