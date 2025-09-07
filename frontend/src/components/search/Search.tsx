"use client";

import useQueryParams from "hooks/useQueryParams";
import React from "react";
import SearchBar from "./SearchBar";

/**
 * Search component for searching archive units containing with relevant object data.
 */
const Search = () => {
  const { queryParams, setQueryParams } = useQueryParams<{
    s: string;
  }>();

  const [searchTerm, setSearchTerm] = React.useState(queryParams.s);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event?.target) {
      return false;
    }

    const searchQuery = event.target?.value;

    setSearchTerm(searchQuery);

    if (searchQuery === "") {
      setQueryParams({ s: "" });
    }
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setQueryParams({ s: searchTerm });
  };

  return (
    <div>
      <form
        id="search"
        className="mt-[3.5px] mb-[1.75px]"
        onSubmit={handleFormSubmit}
      >
        <SearchBar
          placeholder="Søk i våre arrangementer"
          id="s"
          type="text"
          role="search"
          fullWidth
          autoComplete="off"
          onChange={handleSearchChange}
          value={searchTerm}
        />
      </form>
    </div>
  );
};

export default Search;
