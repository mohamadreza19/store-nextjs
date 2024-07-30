import { Dispatch, Store } from "redux";
import store, { RootState } from "./store";
import { TypedUseSelectorHook, UseSelector, useSelector } from "react-redux";

import { ApiCallStatus } from "../shared/interfaces";
import { apiCallStatusSliceActions } from "../features/apiCallStatus/apiCallStatus";

type UseSelectorFunction = () => TypedUseSelectorHook<RootState>;
type Segments = keyof RootState;
export default class GlobalStoreService {
  protected dispatch = store.dispatch;
  protected getUseSelector: UseSelectorFunction = () => useSelector;
  protected getStore = () => store.getState();

  public addApiStatus(payload: ApiCallStatus) {
    this.dispatch(apiCallStatusSliceActions.add(payload));
  }

  public getApiStatus() {
    return this.getUseSelector()((state) => state.apiCallStatus);
  }
}
