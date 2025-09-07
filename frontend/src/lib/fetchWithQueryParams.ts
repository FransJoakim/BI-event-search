"use server";
import { serverFetch } from "./serverFetch";
import { QueryParams } from "types/searchTypes";
import { stringifyQueryParams } from "./stringifyQueryParams";

/**
 * Fetch data from the backend with normalized query params.
 * Arrays are bracket-serialized, empty/null values are skipped.
 *
 * @param path - API path (e.g. "search/events")
 * @param queryParams - Query params (subset of QueryParams)
 */
export const fetchWithQueryParams = async <T>(
  path: string,
  queryParams: Partial<QueryParams> = {}
) => {
  const qs = stringifyQueryParams(queryParams);

  const url = `${process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000"}/${path}?${qs}`;

  return (await serverFetch(url)) as Promise<T>;
};
