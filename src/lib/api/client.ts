import axios from "axios";
import AES256 from "aes-everywhere";

import { getAxiosError } from "../utils";
import { toast } from "react-toastify";

export const SERVER = {
  hostUrl: process.env.HOST_URL,
  version: process.env.VERSION,
  s3Url: process.env.S3_URL,
  securityBasePlain: process.env.SECURITY_BASE_PLAIN,
  securityPassPhrase: process.env.SECURITY_PASS_PHRASE
};

export const BASE_URL = `${SERVER.hostUrl}${SERVER.version}`;

export const apiDefault = () => {
  const instance = axios.create({
    baseURL: BASE_URL
  });

  instance.interceptors.request.use(config => {
    const accessToken = localStorage.getItem("access_token");

    config.headers = {
      Authorization: `Bearer ${accessToken}`,
      "Request-Security": AES256.encrypt(
        `${SERVER.securityBasePlain}:${(+new Date() + "").slice(0, 10)}`,
        SERVER.securityPassPhrase
      )
    };

    return config;
  });

  instance.interceptors.response.use(
    res => res,
    err => {
      const { status } = getAxiosError(err);

      if (status === 400) {
        toast.error("유효하지 않은 요청이 발생했습니다.");
      } else if (status === 407) {
        toast.error("서버에 요류가 발생했습니다.");
      } else if (status === 429) {
        toast.error("한 번에 너무 많은 요청이 발생했습니다.");
      }

      return Promise.reject(err);
    }
  );

  return instance;
};
