import axios, { AxiosInstance } from 'axios';

export default function useHttp(): AxiosInstance {
  const instance = axios.create();

  instance.interceptors.request.use(config => {
    const temporaryConfig = { ...config };

    temporaryConfig.headers['Content-Type'] = 'application/json';

    return config;
  });

  return instance;
}
