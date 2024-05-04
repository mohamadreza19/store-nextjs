import GlobalStoreService from "../lib/services/GlobalStoreService";
import { RootState } from "../lib/services/store";
import { AllUsersResponse, StatisticsResponse } from "./interfaces";
import { sharedUiSliceActions } from "./reducres/sharedUi.slice";
import { statisticsSliceActtions } from "./reducres/statistics.slice";
import { usersSliceActions } from "./reducres/users.slice";

class AdminService extends GlobalStoreService {
  // <users-segment>
  get users() {
    return this.getUseSelector()((state) => state.adminUsers);
  }
  addUser(values: AllUsersResponse) {
    return this.dispatch(usersSliceActions.add(values));
  }
  reInitUser() {
    return this.dispatch(usersSliceActions.reInit());
  }
  // <statistics-segment>
  addStatistics(statistics: StatisticsResponse) {
    this.dispatch(statisticsSliceActtions.add(statistics));
  }
  get statistics() {
    return this.getUseSelector()((state) => state.adminStatistics);
  }
  // <products-segment>

  // <sharedSide-segment>
  openSharedSideBar() {
    this.dispatch(sharedUiSliceActions.openSharedUi());
  }
  closeSharedSideBar() {
    this.dispatch(sharedUiSliceActions.closeSharedUi());
  }
  get shouldRenderSharedSideBar() {
    return this.getUseSelector()(
      (state) => state.adminSharedUi.shouldRenderSharedSideBar
    );
  }
}
export default AdminService;
