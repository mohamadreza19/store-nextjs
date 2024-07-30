import GlobalStoreService from "@lib/services/GlobalStoreService";
import { userActions } from "./reducers/users.slice";
import { UsersCoreInfoResponse } from "./interfaces";
import { InjectUseSelect } from "@lib/shared";
import { UseSelectMethod } from "@lib/shared/decorators/InjectUseSelect";
@InjectUseSelect("user")
class UsersService extends GlobalStoreService {
  // Add service methods here
  private useSelect!: UseSelectMethod<"user">;

  setCoreInfo = (coreInfo: UsersCoreInfoResponse) => {
    this.dispatch(userActions.add(coreInfo));
  };
  reInitial = () => {
    this.dispatch(userActions.reInitial());
  };
  getUserCoreInfo = (asHook: boolean) => {
    return this.useSelect(asHook).coreInfo;
  };
  getAuthenticationStatus = (asHook: boolean) => {
    return this.useSelect(asHook).isAuthenticated;
  };
  changeAuthenticationStatus = (isAuthenticated: boolean) => {
    this.dispatch(userActions.changeAuthenticationStatus(isAuthenticated));
  };
}
export default UsersService;
