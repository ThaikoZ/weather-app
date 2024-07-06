import { FormEvent, useRef } from "react";

const SearchInput = () => {
  const searchRef = useRef<HTMLInputElement>(null);

  const serializeFormQuery = (value: string | null) => {
    if (!value) return "";
    return "?location=" + encodeURIComponent(value);
  };

  const validateInput = (value: string | null) => {
    if (!value || value.trim() === "") {
      return "Search input cannot be empty.";
    }
    if (value.length > 35) {
      return "Search input cannot exceed 35 characters.";
    }
    return null;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const value = searchRef.current?.value || "";
    const validationError = validateInput(value);

    if (validationError) {
      return;
    }

    const params = serializeFormQuery(value);
    if (params) {
      window.location.href = params;
    }
  };

  return (
    <form className="h-full" onSubmit={handleSubmit}>
      <label className="relative block h-full">
        <span className="sr-only">Search</span>
        <span className="absolute inset-y-0 left-0 flex items-center pl-2.5 z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </span>
        <input
          ref={searchRef}
          type="text"
          className="py-2.5 pe-3 h-full w-full backdrop-blur-md bg-black bg-opacity-20 text-[0.95rem] shadow-md rounded-lg text-white placeholder:text-white placeholder:text-opacity-55 placeholder:font-light ps-11 focus:bg-opacity-15 "
          placeholder="Search for location"
          maxLength={35}
        />
      </label>
    </form>
  );
};

export default SearchInput;
