import { renderHook, act } from "@testing-library/react";
import useQueryParams from "hooks/useQueryParams";

// Mock router and query-string if needed
const mockPush = jest.fn();
jest.mock("next/navigation", () => ({
  useRouter: () => ({ push: mockPush }),
  usePathname: () => "/search",
  useSearchParams: () => new Map([["campus", "campus1"]]), // <-- mock with test data
}));

describe("useQueryParams hook", () => {
  beforeEach(() => {
    mockPush.mockClear();
  });

  it("should set and get query params correctly", () => {
    const { result } = renderHook(() => useQueryParams());

    act(() => {
      result.current.setQueryParams({ campus: "campus1" });
    });

    console.log(result.current);

    expect(result.current.queryParams.campus).toEqual(["campus1"]);
  });
});
