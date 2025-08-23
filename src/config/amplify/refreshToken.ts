import { fetchAuthSession } from "aws-amplify/auth";
import type { InternalAxiosRequestConfig } from "axios";

export const refreshTokenInterceptor = async (
  config: InternalAxiosRequestConfig
) => {
  const updatedConfig = { ...config };

  try {
    const { idToken } = (await fetchAuthSession()).tokens ?? {};
    if (idToken) {
      updatedConfig.headers.Authorization = `Bearer ${idToken}`;
    }
  } catch (err) {
    console.error("Error refreshing token:", err);
    throw err;
  }

  const useCustomDomainId =
    updatedConfig.headers["x-use-custom-domain-id"] === "true";
  if (useCustomDomainId) {
    delete updatedConfig.headers["x-use-custom-domain-id"];
  }

  return updatedConfig;
};
