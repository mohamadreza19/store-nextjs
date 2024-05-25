import GlobalStoreService from "../lib/services/GlobalStoreService";
import { CategoriesResponse } from "./interfaces";
import { categoriesActions } from "./reducers/categories.slice";

class CategoriesService extends GlobalStoreService {
  // Add service methods here

  private useSelect = (asHook = true) => {
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

  getMainCategories = (asHook = true) => {
    return this.useSelect(asHook).main;
  };
  getSubCategories = () => {
    // return this.getStore().categories.sub;
    return this.getUseSelector()((state) => state.categories.sub);
  };
}
export default CategoriesService;
