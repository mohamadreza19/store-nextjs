import CategoriesApiService from "./categories.api";
import CategoriesService from "./categories.service";

class CategoriesController {
  constructor(
    private categoriesService: CategoriesService,
    private categoriesApiService: CategoriesApiService
  ) {}
  fetchMainCategories = async () => {
    const result = await this.categoriesApiService.getCategories();
    this.categoriesService.addMainCategories(result);
  };
  fetchSubCategoriesByParentId = async (parentId: string) => {
    const result = await this.categoriesApiService.getSubCategories(parentId);

    this.categoriesService.addSubCategories(result);
  };
  reInitSubSubCategories() {
    this.categoriesService.reInitSubCategories();
  }

  // Add controller methods here
}
export default CategoriesController;
