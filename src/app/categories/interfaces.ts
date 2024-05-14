import CategoriesService from "./categories.service";
import CategoriesController from "./categories.controller";

export type Category = {
  _id: string;
  name: string;
  parent_id: null | string;
};
export type CategoriesResponse = Category[];

export interface CategoriesInjectionEntities {
  categoriesService: CategoriesService;
  categoriesController: CategoriesController;
}
