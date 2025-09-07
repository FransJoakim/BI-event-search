"use client";

import Button from "@mui/material/Button";
import useQueryParams from "hooks/useQueryParams";

const ClearFilters = () => {
  const { queryParams, setQueryParams } = useQueryParams();

  const clearFilters = () => {
    const updatedParams = { ...queryParams };
    Object.keys(updatedParams).forEach((key) => {
      if (key !== "s") {
        updatedParams[key] = undefined;
      }
    });

    setQueryParams(updatedParams);
  };

  return (
    <Button onClick={clearFilters} color="secondary" variant="text">
      Nullstill
    </Button>
  );
};

export default ClearFilters;
