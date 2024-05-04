"use client";
import { Header1 } from "@/app/lib/components";

import { useEffect, useState } from "react";

import { AdvancedLayout1 } from "@/app/lib/components";

import { useAdminInjection } from "../admin.module";

function Users() {
  const adminModule = useAdminInjection();
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);

  function resetAndSearchUsers(event: React.ChangeEvent<HTMLInputElement>) {
    adminModule.adminController.resetAndSearchUsers(
      event.target.value,
      setPage,
      setHasNextPage,
      setSearch
    );
  }

  useEffect(() => {
    adminModule.adminService.reInitUser();
    adminModule.adminController.loadUsersAndSetPagination(
      page,
      search,
      setPage,
      setHasNextPage
    );
  }, [search]);
  return (
    <div className="w-full h-full ">
      <Header1>کاربران</Header1>

      <main className="w-full ps-3">
        <AdvancedLayout1
          toggleCreateUser={adminModule.adminController.toggleCreateUserModal}
          searchFn={resetAndSearchUsers}
          hasMore={hasNextPage}
          fetchNextPage={() =>
            adminModule.adminController.loadUsersAndSetPagination(
              page,
              search,
              setPage,
              setHasNextPage
            )
          }
          uesrs={adminModule.adminService.users.data}
        />
      </main>
    </div>
  );
}

export default Users;
