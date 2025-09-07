import { stringifyQueryParams } from "lib/stringifyQueryParams";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ARRAY_QUERY_PARAM_KEYS } from "types/searchTypes";

/**
 * Hook for reading and updating URL query parameters.
 */
const useQueryParams = <T = Record<string, string>,>() => {
  const router = useRouter();
  const pathname = usePathname();

  const params: Record<string, string | string[]> = {};

  useSearchParams().forEach((value, key) => {
    if (!value) return;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    if (ARRAY_QUERY_PARAM_KEYS.includes(key as any)) {
      params[key] = params[key]
        ? [...(params[key] as string[]), value]
        : [value];
    } else {
      params[key] = value;
    }
  });

  const queryParams = params as Partial<T>;

  /**
   * Update the query parameters in the URL.
   * @param {Object} params - The new query parameters to set.
   */
  const setQueryParams = (params: Partial<T>) => {
    console.log("Setting query params:", params);

    const updatedParams: Record<string, unknown> = {
      ...queryParams,
      ...params,
    };

    if (JSON.stringify(updatedParams) === JSON.stringify(queryParams)) {
      return;
    }

    const search = stringifyQueryParams(
      updatedParams as Record<string, string>
    );
    const query = search ? `?${search}` : "";

    console.log("Pushing new URL with query:", `${pathname}${query}`);

    router.push(`${pathname}${query}`);
  };

  return { queryParams, setQueryParams };
};

export default useQueryParams;
