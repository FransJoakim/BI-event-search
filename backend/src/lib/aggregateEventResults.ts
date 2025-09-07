import { campuses } from "../models/campus";
import {
  languageLabels,
  languages,
  type Event,
  type SearchResultAggregation,
} from "../models/event";

export const aggregateEventResults = (events: Event[]) => {
  const aggregations = {} as Record<string, number>;

  // Generate aggregations for all filters
  events.forEach((event) => {
    event.filterList.split(",").forEach((filter) => {
      const f = filter.trim().toLowerCase();
      if (f) {
        aggregations[f] = (aggregations[f] || 0) + 1;
      }
    });
  });

  const campusAggregations = campuses.reduce((acc, campus) => {
    const hitsOnCampus = aggregations[campus.toLocaleLowerCase()] || 0;

    if (hitsOnCampus > 0) {
      acc.push({ key: campus, name: campus, count: hitsOnCampus });
      delete aggregations[campus.toLocaleLowerCase()]; // Remove to avoid duplication in other aggregations
    }

    return acc;
  }, [] as SearchResultAggregation[]);

  const audienceAggregations: SearchResultAggregation[] = Object.entries(
    aggregations
  ).map(([key, count]) => ({ key, name: key, count }));

  const languageAggregations = languages.reduce((acc, lang) => {
    const count = events.filter(
      (e) => lang === (e.language as (typeof languages)[number])
    ).length;

    if (count > 0) {
      acc.push({ key: lang, name: languageLabels[lang] || "ukjent", count });
    }

    return acc;
  }, [] as SearchResultAggregation[]);

  return {
    campus: campusAggregations,
    audience: audienceAggregations,
    language: languageAggregations,
  };
};
