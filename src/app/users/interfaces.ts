
import UsersService from "./users.service";
import UsersController from "./users.controller";
export type UsersResponse={}

export interface  UsersInjectionEntities  {
  usersService:  UsersService;
  usersController:  UsersController;
  }
