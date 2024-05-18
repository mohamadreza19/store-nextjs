import { Dispatch, Store } from "redux";
import store, { RootState } from "./store";
import { TypedUseSelectorHook, UseSelector, useSelector } from "react-redux";
import { apiCallStatus } from "../shared/reducers";
import { ApiCallStatus } from "../shared/interfaces";
import { apiCallStatusSliceActions } from "../shared/reducers/apiCallStatus";

type UseSelectorFunction = () => TypedUseSelectorHook<RootState>;

export default class GlobalStoreService {
  public dispatch = store.dispatch;
  public getUseSelector: UseSelectorFunction = () => useSelector;
  public getStore = () => store.getState();

  public addApiStatus(payload: ApiCallStatus) {
    this.dispatch(apiCallStatusSliceActions.add(payload));
  }

  public getApiStatus() {
    return this.getUseSelector()((state) => state.apiCallStatus);
  }
}
