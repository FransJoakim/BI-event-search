"use client";

import React from "react";
import { motion } from "framer-motion";
import ResultItem from "components/searchResults/ResultItem";
import { Event } from "types/dataTypes";

type Props = {
  searchResults: Event[];
};

/**
 *
 * This component is responsible for rendering a list of search results.
 *
 * @component
 * @param {Event[]} [props.searchResults] - The search results, fetched server-side.
 *
 * @returns {JSX.Element}
 */
export const Results: React.FC<Props> = ({ searchResults }) => {
  return (
    <>
      {searchResults?.length ? (
        searchResults.map((event) => (
          <motion.li
            id={event.id.toString()}
            key={`search-result-${event.id}`}
            className="border-darkBlue-500 hover:border-sky-500 rounded-md border max-w-[350px] transition w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, type: "tween", ease: "easeInOut" }}
          >
            <ResultItem event={event} />
          </motion.li>
        ))
      ) : (
        <div className="flex flex-col items-center">
          <div className="mb-3 font-medium">
            <p>Ingen treff</p>
          </div>
        </div>
      )}

      {searchResults && searchResults.length > 6 && (
        <li className="col-span-full mt-0.75 mb-0.75 w-full text-center">
          <a
            className="font-medium text-[#1D1D1D] no-underline"
            style={{
              boxSizing: "content-box",
              borderBottom: "1px solid #1D1D1D",
            }}
            href="#top"
          >
            Gå til toppen
          </a>
        </li>
      )}
    </>
  );
};
