// export interface Event {
//   id: string;
//   language: string;
//   title: string;
//   location: string;
//   filterList: string;
//   start: string;
//   end: string;
//   startTime: string;
//   endTime: string;
//   url: string;
//   imageUrl: string;
//   imageText: string;
//   bothLanguages: boolean;
// }

// export interface SearchResultAggregation {
//   key: string;
//   name: string;
//   count: number;
// }

// export interface EventSearchResponse {
//   hits: number;
//   data: Event[];
//   aggregations: Record<EventFilter, SearchResultAggregation[]>;
// }

export const languages = ["no", "en", "all"];
export const languageLabels = {
  no: "Norsk",
  en: "Engelsk",
  all: "Alle",
};

export const eventFilters = ["language", "campus", "audience"];
// export type EventFilter = (typeof eventFilters)[number];
