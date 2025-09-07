"use server";
import { ErrorResponse, BadRequestResponse } from "types/fetchTypes";

export const serverFetch = async <T>(
  url: string,
  options: RequestInit = {},
) => {
  const result = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    ...options,
  });

  const json = (await result.json()) as T | ErrorResponse;

  if (!result.ok) {
    if (result.status === 400) {
      const errorResponse = json as BadRequestResponse;

      const details = Object.entries(errorResponse.errors)
        .map(([key, value]) => `- ${key}: ${value}`)
        .join("\n");

      throw new Error(`${errorResponse.message}\n\n${details}\n\nurl: ${url}`);
    } else {
      const errorResponse = json as ErrorResponse;

      throw new Error(
        `${errorResponse.error.type}: ${errorResponse.error.message}, url: ${url}`,
      );
    }
  }

  return json as T;
};
