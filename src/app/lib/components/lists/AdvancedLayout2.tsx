import { Product } from "@/app/products/interfaces";
import Image from "next/image";
import { BiEdit, BiTrash } from "react-icons/bi";
import { IoMdEye } from "react-icons/io";
import { MdEdit, MdRemove } from "react-icons/md";
import InfiniteScroll from "react-infinite-scroll-component";
import LocaledNumber from "../LocaledNumber";

interface Props {
  proudcts: Product[];
  fetchNextPage: () => void;
  searchFn: (event: React.ChangeEvent<HTMLInputElement>) => void;
  hasMore: boolean;
  toggleCreateUser: () => void;
}

function AdvancedLayout2(props: Props) {
  return (
    <>
      {/* <Modal1 toggleFn={props.toggleCreateUser} /> */}
      <InfiniteScroll
        dataLength={10} //This is important field to render the next data
        next={props.fetchNextPage}
        hasMore={props.hasMore}
        loader={<></>}
        endMessage={<></>}
        pullDownToRefreshThreshold={50}
      >
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-3">
          <div className="flex items-center gap-2 pb-4 bg-white dark:bg-gray-900">
            <div className=" relative mt-1">
              <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                onChange={props.searchFn}
                type="text"
                id="table-search"
                className="block py-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="جستجوی در نام محصولات"
              />
            </div>
            {/* <Button1 onClick={props.toggleCreateUser}>افزودن کاربر</Button1> */}
          </div>
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-all-search"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label htmlFor="checkbox-all-search" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  نام محصول
                </th>
                <th scope="col" className="px-6 py-3">
                  نام سازنده
                </th>
                <th scope="col" className="px-6 py-3">
                  تعداد فروش
                </th>
                <th scope="col" className="px-6 py-3">
                  قیمت
                </th>
                <th scope="col" className="px-6 py-3">
                  عملیات
                </th>
              </tr>
            </thead>
            <tbody>
              {props.proudcts?.map((product, index) => (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-search-1"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="checkbox-table-search-1"
                        className="sr-only"
                      >
                        checkbox
                      </label>
                    </div>
                  </td>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {product.name}
                  </th>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {product.creator.username}
                  </th>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <LocaledNumber number={product.total_sales} />
                  </th>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <LocaledNumber number={product.price} />
                  </th>

                  <td className="px-6 py-4 flex justify-center gap-2">
                    <a
                      href="#"
                      className=" font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      <IoMdEye className="fill-gray-400" />
                    </a>
                    <a
                      href="#"
                      className=" font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      <MdEdit className="fill-blue-600" />
                    </a>
                    <a
                      href="#"
                      className=" font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      <BiTrash className="fill-red-600" />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </InfiniteScroll>
    </>
  );
}

export default AdvancedLayout2;
