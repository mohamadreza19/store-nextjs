import { ModuleProps } from "../lib/shared/interfaces";
import { createContext, useContext, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import ProductsApiService from "./products.api";
import ProductsService from "./products.service";
import ProductsController from "./products.controller";
import ProuctsFactory from "./product.factory";

type InjectionEntities = {
  productsService: ProductsService;
  productsController: ProductsController;
};
const InjectionContext = createContext({});

interface ProductsModuleState {}

function ProductsModule({ children }: ModuleProps) {
  const router = useRouter();

  const memorizedModlue = useMemo(function createInjectEntities() {
    return ProuctsFactory.createInstances();
  }, []);

  useEffect(() => {
    // memorizedModlue.adminController.redirectToDashboardIfAuthorized();
  }, []);
  return (
    <InjectionContext.Provider value={memorizedModlue}>
      <main>{children}</main>
    </InjectionContext.Provider>
  );
}

export const useProductsInjection = (): InjectionEntities =>
  useContext(InjectionContext) as InjectionEntities;

export default ProductsModule;
