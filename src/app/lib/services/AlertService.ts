import { ListAlerts, DismissAlert } from "@lib/features/alert";
import GlobalStoreService from "./GlobalStoreService";

export default class AlertService extends GlobalStoreService {
  addListAlert(payload: ListAlerts.AddPayload) {
    this.dispatch(ListAlerts.Actions.add(payload));
  }
  getListAlert() {
    return this.getUseSelector()((state) => state.list_alerts.items);
  }
  removeListAlert() {
    this.dispatch(ListAlerts.Actions.remove());
  }

  addDismissAlert(payload: DismissAlert.AddPayload) {
    this.dispatch(DismissAlert.Actions.add(payload));
  }
  getDismissAlert() {
    return this.getUseSelector()((state) => state.dismiss_alert);
  }
  removeDismissAlert() {
    this.dispatch(DismissAlert.Actions.remove());
  }
}
