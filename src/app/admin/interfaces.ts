import { Actions } from "immer-reducer";

import { SetStateAction } from "react";
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
export type Product = {
  _id: string;
  name: string;
  creator: User;
  price: number;
  off_price: number;
  off_precent: number;
  total_sales: number;
  files: string[];
  createAt: string;
  updatedAt: string;
};

export type AllUsersResponse = {
  data: User[];
  meta: {
    total: number;
    pages: number;
    page: number;
  };
};
export type AllProductsResponse = {
  data: Product[];
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

// ui-local-state
export type SetPage = (value: SetStateAction<number>) => void;
export type SetHasNextPage = (value: SetStateAction<boolean>) => void;
export type SetSearch = (value: SetStateAction<string>) => void;
export type SetOpenCreateProductModal = (
  value: SetStateAction<boolean>
) => void;
