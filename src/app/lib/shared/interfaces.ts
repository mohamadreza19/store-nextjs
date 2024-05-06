import { ReactNode, SetStateAction } from "react";

export interface ModuleProps {
  children: ReactNode;
  // renderSharedUi?: boolean;
}
export abstract class ModuleFactory {
  static createInstances(): any {}
}

export type SetPage = (value: SetStateAction<number>) => void;
export type SetHasNextPage = (value: SetStateAction<boolean>) => void;
export type SetSearch = (value: SetStateAction<string>) => void;
