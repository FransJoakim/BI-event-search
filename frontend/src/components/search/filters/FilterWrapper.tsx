"use client";
import React from "react";
import Button from "@mui/material/Button";
import ClearFilters from "./ClearFilter";
import TuneIcon from "@mui/icons-material/Tune";
import useQueryParams from "hooks/useQueryParams";

type FiltersWrapperProps = {
  children: React.ReactNode;
};

const FiltersWrapper = ({ children }: FiltersWrapperProps) => {
  const [isLargeScreen, setIsLargeScreen] = React.useState(false);
  const [openFilters, setOpenFilters] = React.useState(false);
  const { queryParams } = useQueryParams();

  const nrOfActiveFilters = Object.values(queryParams).reduce(
    (acc, val) => acc + (Array.isArray(val) ? val.length : val ? 1 : 0),
    0
  );

  React.useEffect(() => {
    const checkScreenSize = () => {
      // Tailwind lg breakpoint is 1024px
      const isLgOrLarger = window.matchMedia("(min-width: 1024px)").matches;
      setIsLargeScreen(isLgOrLarger);
      setOpenFilters(isLgOrLarger);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const handleButtonClick = () => {
    if (isLargeScreen) {
      setOpenFilters(true);
    } else {
      setOpenFilters((prev) => !prev);
    }
  };

  const FilterIconAndLabel = () => (
    <div className="flex items-center gap-4">
      <TuneIcon />
      Filter{" "}
      {!isLargeScreen && nrOfActiveFilters > 0 && `(${nrOfActiveFilters})`}
    </div>
  );

  return (
    <>
      <div title="Filter" className="mb-4 flex items-center justify-between">
        {isLargeScreen ? (
          <FilterIconAndLabel />
        ) : (
          <Button
            variant="text"
            sx={{ color: "black" }}
            onClick={handleButtonClick}
          >
            <FilterIconAndLabel />
          </Button>
        )}
        <div className="flex justify-end">
          <ClearFilters />
        </div>
      </div>

      <div>{(isLargeScreen || openFilters) && children}</div>
    </>
  );
};
export default FiltersWrapper;
