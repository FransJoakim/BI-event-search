"use client";
import Sort from "@mui/icons-material/Sort";
import useQueryParams from "hooks/useQueryParams";
import SelectMenuChip from "./SelectMenuChip";

/**
 * Component for sorting search results.
 */
const Sorting = () => {
  const { queryParams, setQueryParams } = useQueryParams<{ sort: string }>();
  const currentSort = queryParams.sort ?? "asc";

  const OPTIONS: Record<string, string> = {
    asc: "Først til sist",
    desc: "Sist til først",
  };

  const menuItems = Object.entries(OPTIONS).map(([key, label]) => ({
    key,
    label,
  }));

  const handleChange = (key: string) => {
    setQueryParams({ ...queryParams, sort: key });
  };

  return (
    <div className="xl:pl-1.5 ml-2">
      <SelectMenuChip
        label={OPTIONS[currentSort] ?? OPTIONS["asc"]}
        startIcon={<Sort />}
        menuItems={menuItems}
        selectedKey={currentSort}
        onChange={handleChange}
        closeOnSelect
      />
    </div>
  );
};

export default Sorting;
