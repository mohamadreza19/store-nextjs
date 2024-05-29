import UsersApiService from "./users.api";
import UsersService from "./users.service";

class UsersController {
  constructor(
    private usersService: UsersService,
    private usersApiService: UsersApiService
  ) {}
  fetchUserCoreInfo = async () => {
    try {
      const result = await this.usersApiService.getCoreInfo();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  // Add controller methods here
}
export default UsersController;
