import React from "react";
import { QueryParams } from "types/searchTypes";
import FiltersWrapper from "components/search/filters/FilterWrapper";
import Filters from "components/search/filters/Filters";
import Search from "./Search";

type Props = { searchParams: QueryParams };

const Sidebar = ({ searchParams }: Props) => {
  return (
    <div className="space-y-6">
      <Search />
      <FiltersWrapper>
        <Filters searchParams={searchParams} />
      </FiltersWrapper>
    </div>
  );
};

export default Sidebar;
