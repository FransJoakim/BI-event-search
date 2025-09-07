"use client";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import useQueryParams from "hooks/useQueryParams";
import {
  ARRAY_QUERY_PARAM_KEYS,
  SearchResultAggregation,
} from "types/searchTypes";

/**
 * Renders a component for selecting and filtering search results.
 *
 * @component Filter
 * @param {Object} props - The component props.
 * @param {string} props.label - The component label.
 * @param {string} props.filterKey - The key for the filter in the query parameters.
 * @param {SearchResultAggregation[] | undefined} props.options - The list of options for the filter.
 * @returns {React.ReactNode} The rendered component.
 */
const MultiSelectFilter = ({
  label,
  filterKey,
  options,
}: {
  label: string;
  filterKey: (typeof ARRAY_QUERY_PARAM_KEYS)[number];
  options: SearchResultAggregation[] | undefined;
}) => {
  const { queryParams, setQueryParams } =
    useQueryParams<Record<string, string[] | undefined>>();

  const values: SearchResultAggregation[] = queryParams[filterKey]
    ? (options?.filter((o) =>
        (queryParams[filterKey] as string[]).includes(o.key)
      ) ?? [])
    : [];

  const handleOnChange = (
    _: React.SyntheticEvent,
    values: SearchResultAggregation[]
  ) => {
    setQueryParams({
      [filterKey]: values.map((v) => v.key),
    });
  };

  return (
    <Autocomplete
      multiple
      options={options || []}
      value={values}
      onChange={handleOnChange}
      renderInput={(params) => <TextField {...params} label={label} />}
      getOptionLabel={(option) => option?.name || ""}
      className="my-2 bg-white"
      isOptionEqualToValue={(option, value) => option?.key === value?.key}
      renderOption={(props, option, state) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const { key, ...rest } = props;
        return (
          <Box component="li" key={`${key}-${state.index}`} {...rest}>
            {option.name} ({option.count})
          </Box>
        );
      }}
    />
  );
};

export default MultiSelectFilter;
