import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { LoadingService, TokenStorageService } from "../lib/services";
import { AuthApiService } from "../lib/services/api";
import { LoginFormikValues, SetOpenCreateProductModal } from "./interfaces";
import AdminApiService from "./admin.api";
import AdminService from "./admin.service";
import { SetHasNextPage, SetPage, SetSearch } from "../lib/shared/interfaces";

class AdminController {
  private timeoutId: null | NodeJS.Timeout = null;
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
  resetAndSearchUsers = (search: string, setHasNextPage: SetHasNextPage) => {
    if (this.timeoutId) clearTimeout(this.timeoutId);

    this.adminService.reInitUsers();

    this.timeoutId = setTimeout(async () => {
      const result = await this.adminApiService.getAllUsers(1, 10, search);

      this.adminService.addUser(result);

      if (!(result.meta.page < result.meta.pages)) {
        return setHasNextPage(false);
      }
      setHasNextPage(true);
    }, 350);
  };
  toggleCreateUserModal(id: string) {
    document.getElementById(id)?.classList.toggle("hidden");
  }
}
export default AdminController;
