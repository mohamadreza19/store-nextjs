import { Actions } from "immer-reducer";

import { SetStateAction } from "react";
import AdminService from "./admin.service";
import AdminController from "./admin.controller";
import { ProductsInjectionEntities } from "../products/interfaces";
import { CategoriesInjectionEntities } from "../categories/interfaces";
export type LoginFormikValues = {
  username: string;
  password: string;
};

export type User = {
  _id: string;
  username: string;
  password: string;
  email: string;
  role: string;
  createAt: string;
};

export type AllUsersResponse = {
  data: User[];
  meta: {
    total: number;
    pages: number;
    page: number;
  };
};

export type StatisticsResponse = {
  productCount: number;
  userCount: number;
};
export type SharedUi = {
  shouldRenderSharedSideBar: boolean;
};
export interface State {
  shouldRenderSharedSideBar: boolean;
  statistics: StatisticsResponse;
  users: AllUsersResponse;
}
export interface AdminInjectionEntities
  extends ProductsInjectionEntities,
    CategoriesInjectionEntities {
  adminService: AdminService;
  adminController: AdminController;
}

// ui-local-state

export type SetOpenCreateProductModal = (
  value: SetStateAction<boolean>
) => void;
