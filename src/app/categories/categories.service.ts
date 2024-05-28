import GlobalStoreService from "../lib/services/GlobalStoreService";
import { CategoriesResponse } from "./interfaces";
import { categoriesActions } from "./reducers/categories.slice";

class CategoriesService extends GlobalStoreService {
  // Add service methods here

  private useSelect = (asHook: boolean) => {
    // debugger;
    return asHook
      ? this.getUseSelector()((store) => store.categories)
      : this.getStore().categories;
  };

  addMainCategories = (categories: CategoriesResponse) => {
    this.dispatch(categoriesActions.addMain(categories));
  };
  addSubCategories = (subCategories: CategoriesResponse) => {
    this.dispatch(categoriesActions.addSub(subCategories));
  };
  reInitSubCategories = () => {
    this.dispatch(categoriesActions.reInitSub());
  };

  getMainCategories = (asHook: boolean) => {
    return this.useSelect(asHook).main;
  };
  getSubCategories = (asHook: boolean) => {
    // return this.getStore().categories.sub;
    return this.useSelect(asHook).sub;
  };
}
export default CategoriesService;
