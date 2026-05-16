import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";

interface RetryConfig extends InternalAxiosRequestConfig {
  _retry?: boolean;
}

let isRefreshing = false;
let failedQueue: {
  resolve: (value: unknown) => void;
  reject: (error: unknown) => void;
}[] = [];

const processQueue = (error: unknown) => {
  failedQueue.forEach((p) => (error ? p.reject(error) : p.resolve(null)));
  failedQueue = [];
};

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 10_000,
  withCredentials: true,
});

api.interceptors.response.use(
  (res) => res,
  async (err: AxiosError) => {
    const req = err.config as RetryConfig;

    if (err.response?.status === 401 && !req.url?.includes("/auth/refresh")) {
      if (!req._retry) {
        req._retry = true;

        if (isRefreshing) {
          return new Promise((resolve, reject) =>
            failedQueue.push({ resolve, reject }),
          )
            .then(() => api(req))
            .catch(Promise.reject.bind(Promise));
        }

        isRefreshing = true;
        try {
          await api.post("/auth/refresh");
          processQueue(null);
          return api(req);
        } catch (e) {
          processQueue(e);
          return Promise.reject(e);
        } finally {
          isRefreshing = false;
        }
      }
    }

    return Promise.reject(err);
  },
);

export default api;
