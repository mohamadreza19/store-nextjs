import AppService from "./app.service";
import AppController from "./app.controller";
import { ProductsInjectionEntities } from "./products/interfaces";
import AuthController from "./auth/auth.controller";
import { AuthInjectionEntities } from "./auth/interfaces";
import { CategoriesInjectionEntities } from "./categories/interfaces";
import { UsersInjectionEntities } from "./users/interfaces";
export type AppResponse = {};

export interface AppInjectionEntities
  extends ProductsInjectionEntities,
    AuthInjectionEntities,
    CategoriesInjectionEntities,
    UsersInjectionEntities {
  appService: AppService;
  appController: AppController;
}
