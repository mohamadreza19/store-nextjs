"use client";
import { Header1 } from "@/app/lib/components";
import AdvancedLayout2 from "@/app/lib/components/lists/AdvancedLayout2";
import { useAdminInjection } from "../admin.module";
import { useEffect, useState } from "react";

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
  function loadProductsAndSetPagination() {
    AdminModule.productsController.loadProductsAndSetPagination(
      page,
      search,
      setPage,
      setHasNextPage
    );
  }

  useEffect(() => {
    AdminModule.productsService.retInitProducts();
    loadProductsAndSetPagination();
  }, []);

  return (
    <div className="w-full h-full ">
      <Header1>محصولات</Header1>
      <AdvancedLayout2
        fetchNextPage={loadProductsAndSetPagination}
        // fetchNextPage={() => {}}
        hasMore={hasNextPage}
        searchFn={resetAndSearchProducts}
        modalId={AdminModule.productsService.modalId1}
        toggleModal={AdminModule.productsController.toggleCreateProductModal}
        proudcts={AdminModule.productsService.products.data}
      />
    </div>
  );
}

export default Products;
