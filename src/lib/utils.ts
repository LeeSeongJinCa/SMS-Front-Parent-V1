import { AxiosError } from "axios";

import { ResDefault } from "./api/payloads";

export const getAxiosError = (err: AxiosError<ResDefault>) => {
  const { status, code } = err.response.data;
  return { status, code };
};
