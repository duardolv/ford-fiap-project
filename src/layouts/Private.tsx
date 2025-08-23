import { Navigate, Outlet, useLocation } from "react-router-dom";
import useStore from "@/stores";
import { RoutePaths } from "@/routes/routes";
import Header from "@/components/Header";

function Private() {
  const { userData } = useStore();
  const { pathname, search, state } = useLocation();

  if (!userData.isAuth) {
    const from =
      state?.from === "logout" ? RoutePaths.dashboard : `${pathname}${search}`;

    return (
      <Navigate
        to="/sign-in"
        replace
        state={{
          from,
        }}
      />
    );
  }

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default Private;
