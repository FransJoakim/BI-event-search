import MultiSelectFilter from "components/search/filters/MultiSelectFilter";
import { fetchWithQueryParams } from "lib/fetchWithQueryParams";
import {
  ARRAY_QUERY_PARAM_KEYS,
  EventSearchResponse,
  QueryParams,
} from "types/searchTypes";

const FILTER_LABELS: Record<string, string> = {
  language: "Språk",
  campus: "Campus",
  audience: "Målgruppe",
};

type Props = { searchParams: QueryParams };

const Filters = async ({ searchParams }: Props) => {
  const { aggregations } = await fetchWithQueryParams<EventSearchResponse>(
    "search/events",
    searchParams
  );

  return (
    <div className="flex flex-col lg:gap-4">
      {ARRAY_QUERY_PARAM_KEYS.map((key) => (
        <MultiSelectFilter
          key={key}
          label={FILTER_LABELS[key]}
          filterKey={key}
          options={aggregations[key] || []}
        />
      ))}
    </div>
  );
};

export default Filters;
