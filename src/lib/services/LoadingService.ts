import { PluseLoading } from "../features/loading";
import GlobalStoreService from "./GlobalStoreService";

export default class LoadingService extends GlobalStoreService {
  addPluse() {
    this.dispatch(PluseLoading.Actions.add());
  }
  getPluse() {
    return this.getUseSelector()((state) => state.pluse_loading.loading);
  }
  removePluse() {
    this.dispatch(PluseLoading.Actions.remove());
  }
}
