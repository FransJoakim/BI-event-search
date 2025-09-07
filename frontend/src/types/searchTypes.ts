import { Event } from "./dataTypes";

export interface QueryParams {
  s?: string;
  sort?: "asc" | "desc";
  language?: string[];
  campus?: string[];
  audience?: string[];
}

/** Helper: Type-checked so you can't include a key that isn't typed as string[] */
export type KeysWithArrayValues<T> = {
  [K in keyof T]: NonNullable<T[K]> extends any[] ? K : never;
}[keyof T];

/**
 * Runtime list of query keys that the backend expects as arrays.
 */
export const ARRAY_QUERY_PARAM_KEYS = [
  "campus",
  "language",
  "audience",
] as const satisfies readonly KeysWithArrayValues<QueryParams>[];

export interface SearchResultAggregation {
  key: string;
  name: string;
  count: number;
}

export type EventSearchResponseAggregations = Record<
  (typeof ARRAY_QUERY_PARAM_KEYS)[number],
  SearchResultAggregation[]
>;

export interface EventSearchResponse {
  hits: number;
  data: Event[];
  aggregations: EventSearchResponseAggregations;
}
