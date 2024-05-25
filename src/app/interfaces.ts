import AppService from "./app.service";
import AppController from "./app.controller";
import { ProductsInjectionEntities } from "./products/interfaces";
import AuthController from "./auth/auth.controller";
import { AuthInjectionEntities } from "./auth/interfaces";
import { CategoriesInjectionEntities } from "./categories/interfaces";
export type AppResponse = {};

export interface AppInjectionEntities
  extends ProductsInjectionEntities,
    AuthInjectionEntities,
    CategoriesInjectionEntities {
  appService: AppService;
  appController: AppController;
}
