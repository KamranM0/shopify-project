export type APIResponse<T> = {
  error: null | string;
  data: T;
  count: null | number;
  status: number;
  statusText: string;
};
export type OnlyMessageResponse = {
  message: string;
};
export type ErrorResponse = {
  data: {
    message: string;
  };
};
