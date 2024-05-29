import GlobalStoreService from "@lib/services/GlobalStoreService";
import { usersActions } from "./reducers/users.slice";
import { UsersCoreInfoResponse } from "./interfaces";
import { InjectUseSelect } from "@lib/shared";

@InjectUseSelect("users")
class UsersService extends GlobalStoreService {
  // Add service methods here

  setCoreInfo = (coreInfo: UsersCoreInfoResponse) => {
    this.dispatch(usersActions.add(coreInfo));
    this.useSelect;
  };
}
export default UsersService;
