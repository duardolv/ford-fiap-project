import axios from "axios";
import qs from "query-string";
import { refreshTokenInterceptor } from "../amplify/refreshToken";

function createApiInstance(baseURL: string) {
  return axios.create({
    baseURL,
    paramsSerializer: (params) => {
      return qs.stringify(params, { encode: true });
    },
  });
}

export const api = createApiInstance(import.meta.env.VITE_API_URL);

api.interceptors.request.use(refreshTokenInterceptor, (error) => {
  return Promise.reject(error);
});
