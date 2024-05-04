import { Dispatch, Store } from "redux";
import store, { RootState } from "./store";
import { TypedUseSelectorHook, UseSelector, useSelector } from "react-redux";

type UseSelectorFunction = () => TypedUseSelectorHook<RootState>;

export default class GlobalStoreService {
  public dispatch = store.dispatch;
  public getUseSelector: UseSelectorFunction = () => useSelector;
}
