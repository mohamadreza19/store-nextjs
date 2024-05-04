import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { LoadingService, TokenStorageService } from "../lib/services";
import { AuthApiService } from "../lib/services/api";
import {
  LoginFormikValues,
  SetHasNextPage,
  SetOpenCreateProductModal,
  SetPage,
  SetSearch,
} from "./interfaces";
import AdminApiService from "./admin.api";
import AdminService from "./admin.service";

class AdminController {
  constructor(
    private authService: AuthApiService,
    private adminApiService: AdminApiService,
    private tokenStorageService: TokenStorageService,
    private adminService: AdminService,
    private router: AppRouterInstance
  ) {}

  handleLogin = async (values: LoginFormikValues) => {
    const result = await this.authService.login(values);
    this.tokenStorageService.setAccessToken(result.accessToken);
    this.tokenStorageService.setRefreshToken(result.refreshToken);

    this.router.push("/admin/dashboard");
  };
  redirectToDashboardIfAuthorized = async () => {
    if (
      this.tokenStorageService.getAccessToken() &&
      this.tokenStorageService.getRefreshToken()
    ) {
      this.adminService.openSharedSideBar();
      this.router.push("/admin/dashboard");
      return;
    }
    this.adminService.closeSharedSideBar();
    this.router.push("/admin/login");
  };
  fetchStatistics = async () => {
    const result = await this.adminApiService.getStatistics();

    this.adminService.addStatistics(result);
  };
  loadUsersAndSetPagination = async (
    page: number,
    search: string,
    setPage: SetPage,
    setHasNextPage: SetHasNextPage
  ) => {
    const result = await this.adminApiService.getAllUsers(page, 10, search);

    this.adminService.addUser(result);

    if (!(result.meta.page < result.meta.pages)) {
      return setHasNextPage(false);
    }

    setPage((prevPage) => prevPage + 1);
  };
  resetAndSearchUsers = (
    searchEventValue: string,
    setPage: SetPage,
    setHasNextPage: SetHasNextPage,
    setSearch: SetSearch
  ) => {
    setTimeout(() => {
      this.adminService.reInitUser();
      setPage(1);
      setHasNextPage(true);
      setSearch(searchEventValue);
    }, 350);
  };
  toggleCreateUserModal() {
    const MODALID = "crud-modal";
    document.getElementById(MODALID)?.classList.toggle("hidden");
  }
  // toggleCreateProductModal() {
  //   const MODALID = "crud-modal";
  //   document.getElementById(MODALID)?.classList.toggle("hidden");
  // }
}
export default AdminController;
