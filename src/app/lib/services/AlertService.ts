import { useDispatch } from "react-redux";
import {
  addListAlert,
  AddListAlertPayload,
  removeListAlert,
} from "../features/alert";
import { Dispatch } from "redux";
import { useSelector } from "react-redux";
import { RootState } from "./store";

export default class AlertService {
  private _useSelector = () => useSelector;
  constructor(private dispatch: Dispatch) {}

  addListAlert(payload: AddListAlertPayload) {
    this.dispatch(addListAlert(payload));
  }
  getListAlert() {
    return this._useSelector()((state: RootState) => state.list_alerts.items);
  }
  removeListAlert() {
    this.dispatch(removeListAlert());
  }
}
