import AppService from "./app.service";
import AppController from "./app.controller";
import { ProductsInjectionEntities } from "./products/interfaces";
import AuthController from "./auth/auth.controller";
import { AuthInjectionEntities } from "./auth/interfaces";
export type AppResponse = {};

export interface AppInjectionEntities
  extends ProductsInjectionEntities,
    AuthInjectionEntities {
  appService: AppService;
  appController: AppController;
}
