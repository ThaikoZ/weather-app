import { useRef, FormEvent } from "react";

const useSearch = () => {
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

  const applyQueryParams = (param: string = "") => {
    const value = searchRef.current?.value || param;
    const validationError = validateInput(value);

    if (validationError) {
      console.error(validationError);
      return;
    }

    const params = serializeFormQuery(value);
    if (params) {
      window.location.href = params;
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    applyQueryParams();
  };

  return {
    searchRef,
    handleSubmit,
    applyQueryParams,
  };
};

export default useSearch;
