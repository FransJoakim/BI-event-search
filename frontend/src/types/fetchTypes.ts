export interface ErrorResponse {
  error: {
    message: string;
    type: string;
  };
}

export interface BadRequestResponse {
  message: string;
  errors: Record<string, string>;
}

export type ResponseType<T> = T | ErrorResponse | BadRequestResponse;
