import type { ResourcesConfig } from "aws-amplify";

const config: ResourcesConfig = {
  Auth: {
    Cognito: {
      userPoolId: import.meta.env.VITE_USER_POOL_ID,
      userPoolClientId: import.meta.env.VITE_USER_POOL_CLIENT_ID,
      signUpVerificationMethod: "code",
    },
  },
};

export default config;
