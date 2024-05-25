import { SetFormikErrorField } from "@/app/auth/interfaces";
import { Category } from "@/app/categories/interfaces";
import { ButtonHTMLAttributes, ReactNode, SetStateAction } from "react";

export interface ModuleProps {
  children: ReactNode;
  // renderSharedUi?: boolean;
}
export abstract class ModuleFactory {
  static singletonInstance: any;
  static createInstances(): any {}
}

export type SetPage = (value: SetStateAction<number>) => void;
export type SetHasNextPage = (value: SetStateAction<boolean>) => void;
export type SetSearch = (value: SetStateAction<string>) => void;

export interface ApiCallStatus {
  status: "success" | "error" | "idle" | "loading";

  error?: {
    statusCode: number;
    message: string;
  };
}

export interface UserLoginStep {
  sendVerifyCode?: (email: string) => void;
  submit: (
    value: string,
    setFormikEmailErrorField: SetFormikErrorField
  ) => void;
  secondSubmit?: () => void;
  increment?: () => void;
  decrement?: () => void;
  email?: string;
  apiCallStatus: ApiCallStatus;
}

export interface Button extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  loading: boolean;
}

export enum AxiosErrorStatus {
  BAD_REQUEST = 400,
}
// export type CategoriseSegment =
//   | "mobile"
//   | "electronic-devices"
//   | "book-and-media";
// export enum EnumsCategoriseSegment {
//   Mobile = "mobile",
//   ElectronicDevices = "electronic-devices",
//   BooKAndMedia = "book-and-media",
//   None = "",
// }
export enum CategoriseSegment {
  "mobile" = "mobile",
  "electronic-devices" = "electronic-devices",
  "book-and-media" = "book-and-media",
}

export type CategoriseSegmentValues = keyof typeof CategoriseSegment;
export type HoverCategoryFn = (category: Category | null) => void;

export interface Item {
  text: string;
  link: string;
}

export interface IMegaMenuListSection {
  label: Item;
  items: Item[];
}
