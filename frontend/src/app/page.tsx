import React from "react";
import Sidebar from "components/search/Sidebar";
import Main from "components/searchResults/Main";
import { fetchWithQueryParams } from "lib/fetchWithQueryParams";
import { QueryParams, EventSearchResponse } from "types/searchTypes";

type Props = { searchParams: Promise<QueryParams> };

const Page = async (props: Props) => {
  const searchParams = await props.searchParams;
  const results = await fetchWithQueryParams<EventSearchResponse>(
    "search/events",
    searchParams
  );

  return (
    <div
      id="search-container"
      className="relative grid h-[calc(100vh-(var(--header-height)))] w-full grid-cols-12 xl:overflow-hidden"
    >
      <aside
        id="search-sidebar"
        className="sticky top-0 col-span-12 pt-6 lg:col-span-4 2xl:col-span-3 bg-background-default"
      >
        <div className="px-2 md:px-4 xl:px-10">
          <Sidebar searchParams={searchParams} />
        </div>
      </aside>
      <main
        id="results-container"
        className="lg:bg-white bg-background-default col-span-12 mx-0.5 pt-5 overflow-y-auto lg:col-span-8 lg:mx-5 xl:mx-10 2xl:col-span-9"
      >
        <Main searchParams={searchParams} results={results} />
      </main>
    </div>
  );
};

export default Page;
