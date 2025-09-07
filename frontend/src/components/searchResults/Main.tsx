import { QueryParams, EventSearchResponse } from "types/searchTypes";
import { Results } from "./Results";
import Sorting from "components/search/Sorting";
import DotsLoader from "components/shared/DotsLoader";
import React from "react";

const Main = ({
  searchParams,
  results,
}: {
  searchParams: QueryParams;
  results: EventSearchResponse;
}) => {
  return (
    <div className="mb-10 flex flex-col justify-center">
      <div className="sticky top-0 z-20 backdrop-blur">
        <div className="flex items-center justify-between px-4 pb-4 lg:px-0">
          <div className="align-center space-x-2">
            <span>Arrangenter</span>
            <span>({results?.hits})</span>
          </div>
          <Sorting />
        </div>
      </div>

      <div className="mt-9 w-full px-1 lg:px-0">
        {results?.data ? (
          <ul
            id="top"
            key={`results-${JSON.stringify(searchParams)}`}
            className="3xl:grid-cols-4 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3"
          >
            <Results searchResults={results.data} />
          </ul>
        ) : (
          <div className="flex justify-center" role="status">
            <div className="transform -translate-x-14">
              <DotsLoader />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Main;
