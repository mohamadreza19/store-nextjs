import { useEffect, useState } from "react";

interface Props {
  placeHolder: string;
  value: string;
  setValue: (value: string) => void;
}
function SearchInput1(props: Props) {
  const [search, setSearch] = useState("");
  function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }
  function handleSubmit() {
    setTimeout(() => props.setValue(search), 350);
  }
  useEffect(() => {
    handleSubmit();
  }, [search]);
  return (
    <form
      className=" mx-auto my-3"
      onSubmit={(event) => event.preventDefault()}
    >
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
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
          onChange={handleSearchChange}
          value={search}
          type="search"
          id="default-search"
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
          placeholder={props.placeHolder}
        />
        <button
          onClick={handleSubmit}
          className="text-white absolute end-2.5 bottom-2.5 bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 "
        >
          جستجو
        </button>
      </div>
    </form>
  );
}

export default SearchInput1;
