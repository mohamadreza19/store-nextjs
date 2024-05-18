import AppService from "./app.service";
import AppController from "./app.controller";
import { ProductsInjectionEntities } from "./products/interfaces";
export type AppResponse = {};

export interface AppInjectionEntities extends ProductsInjectionEntities {
  appService: AppService;
  appController: AppController;
}
