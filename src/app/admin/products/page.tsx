"use client";
import { Header1 } from "@/app/lib/components";
import AdvancedLayout2 from "@/app/lib/components/lists/AdvancedLayout2";
import { useAdminInjection } from "../admin.module";

function Products() {
  const AdminModule = useAdminInjection();
  return (
    <div className="w-full h-full ">
      <Header1>محصولات</Header1>
      <AdvancedLayout2
        fetchNextPage={() => {}}
        hasMore={false}
        searchFn={() => {}}
        toggleCreateUser={() => {}}
        proudcts={[]}
      />
    </div>
  );
}

export default Products;
