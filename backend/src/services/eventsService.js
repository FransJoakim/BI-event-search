import axios from "axios";
import { aggregateEventResults } from "../lib/aggregateEventResults.js";
import { stringifyQueryParams } from "../lib/stringifyQueryParams.js";

const EVENTS_API = "https://bi.no/api/calendar-events";

export async function fetchEvents(params) {
  const {
    language = "all",
    campus,
    audience,
    s: search,
    sort = "asc",
  } = params;

  const queryParams = {
    take: "500", // Maxing out at 500 to avoid cutting off results (pagination not supported by API)
  };
  if (campus) queryParams.campus = campus;
  if (language) queryParams.language = language;
  if (audience) queryParams.audience = audience;

  const qs = stringifyQueryParams(queryParams);

  const url = EVENTS_API + "?" + qs;
  const { data } = await axios.get(url);

  let events = data;

  // Local search filter
  if (search) {
    const s = search.toLowerCase();
    events = events.filter(
      (e) =>
        e.title.toLowerCase().includes(s) ||
        e.location.toLowerCase().includes(s)
    );
  }

  // Local sort
  events = events.sort((a, b) => {
    if (sort === "desc") {
      return a.start < b.start ? 1 : -1;
    }
    return a.start > b.start ? 1 : -1;
  });

  return {
    hits: events.length,
    data: events,
    aggregations: aggregateEventResults(events),
  };
}
