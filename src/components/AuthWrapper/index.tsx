import { useCallback, useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { fetchAuthSession, getCurrentUser } from "aws-amplify/auth";
import { Hub } from "aws-amplify/utils";
import useStore from "@/stores";
import setAuthorizationHeader from "@/config/amplify/setAuthorizationHeader";

interface Props {
  children: React.ReactNode;
}

function AuthWrapper({ children }: Props) {
  const { saveUserData, resetUserData } = useStore();
  const queryClient = useQueryClient();

  const getTokens = async () => {
    try {
      const { idToken } = (await fetchAuthSession()).tokens ?? {};
      if (!idToken) throw new Error("ID token not found");

      setAuthorizationHeader({ idToken: idToken.toString() });

      const cognitoUserName = idToken?.payload.given_name as string;
      const cognitoEmail = idToken?.payload.email as string;

      return { cognitoEmail, cognitoUserName };
    } catch (err) {
      console.error("Error fetching tokens:", err);
      throw err;
    }
  };

  const handleGetCurrentUser = useCallback(async () => {
    try {
      await getCurrentUser();

      const { cognitoEmail, cognitoUserName } = await getTokens();

      saveUserData({
        userName: cognitoUserName,
        email: cognitoEmail,
        isAuth: true,
      });
    } catch (err) {
        console.error("Error getting current user:", err);
      resetUserData();
    }
  }, [saveUserData, resetUserData]);

  const handleSignIn = useCallback(async () => {
    const { cognitoEmail, cognitoUserName } = await getTokens();

    saveUserData({
      userName: cognitoUserName,
      email: cognitoEmail,
      isAuth: true,
    });
  }, [saveUserData]);

  useEffect(() => {
    handleGetCurrentUser();
  }, [handleGetCurrentUser]);

  useEffect(() => {
    const unsubscribe = Hub.listen("auth", async ({ payload }) => {
      switch (payload.event) {
        case "signedIn":
          handleSignIn();
          break;
        case "signedOut":
          resetUserData();
          queryClient.removeQueries();
          break;
        default:
          break;
      }
    });
    return () => unsubscribe();
  }, [handleSignIn, resetUserData, queryClient]);

  return children;
}

export default AuthWrapper;
