"use client";
import { Header1, Modal2, Modal1 } from "@/app/lib/components";
import AdvancedLayout2 from "@/app/lib/components/lists/AdvancedLayout2";
import { useAdminInjection } from "../admin.module";
import { useEffect, useMemo, useState } from "react";

function Products() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);
  const AdminModule = useAdminInjection();

  function resetAndSearchProducts(event: React.ChangeEvent<HTMLInputElement>) {
    AdminModule.productsController.resetAndSearchProducts(
      event.target.value,
      setHasNextPage
    );
  }
  const loadProductsAndSetPagination = function () {
    AdminModule.productsService.retInitProducts();
    AdminModule.productsController.loadProductsAndSetPagination(
      page,
      search,
      setPage,
      setHasNextPage
    );
  };
  // function loadProductsAndSetPagination() {
  //   AdminModule.productsController.loadProductsAndSetPagination(
  //     page,
  //     search,
  //     setPage,
  //     setHasNextPage
  //   );
  // }
  function fetchMainCategories() {
    AdminModule.categoriesController.fetchMainCategories();
  }

  useEffect(() => {
    loadProductsAndSetPagination();
    fetchMainCategories();
  }, []);

  return (
    <>
      <Modal1
        fetchSubCategoriesByParentId={
          AdminModule.categoriesController.fetchSubCategoriesByParentId
        }
        createProduct={AdminModule.productsController.createProduct}
        categories={AdminModule.categoriesService.getMainCategories()}
        subcategories={AdminModule.categoriesService.getSubCategories()}
        modalId={AdminModule.productsService.modalId1}
        toggleFn={AdminModule.productsController.toggleCreateProductModal}
      />
      <Modal2
        product={AdminModule.productsService.getProduct()}
        categories={AdminModule.categoriesService.getMainCategories()}
        subcategories={AdminModule.categoriesService.getSubCategories()}
        modalId={AdminModule.productsService.modalId2}
      />
      <div className="w-full h-full ">
        <Header1>محصولات</Header1>
        <AdvancedLayout2
          fetchNextPage={loadProductsAndSetPagination}
          onClickEdit={AdminModule.productsController.getProductById}
          // fetchNextPage={() => {}}
          removeProductById={AdminModule.productsController.removeProductById}
          hasMore={hasNextPage}
          searchFn={resetAndSearchProducts}
          modalId={AdminModule.productsService.modalId1}
          toggleModal={AdminModule.productsController.toggleCreateProductModal}
          proudcts={AdminModule.productsService.getProducts().data}
        />
      </div>
    </>
  );
}

export default Products;
