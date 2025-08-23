import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Root } from "@/layouts/Root";
import Public from "@/layouts/Public";
import Private from "@/layouts/Private";

import Dashboard from "@/pages/Dashboard";
import { RoutePaths } from "./routes";
import { ErrorBoundary, RouteErrorBoundary } from "@/ErrorBoundary";
// import { ErrorBoundary, RouteErrorBoundary } from "@/ErrorBoundary";

function AppRouter() {
  const routes = createBrowserRouter([
    {
      element: (
        <ErrorBoundary onReset={() => window.location.reload()}>
          <Root />
        </ErrorBoundary>
      ),
      children: [
        {
          element: <Public />,
          children: [
            { path: RoutePaths.dashboard, element: <Dashboard /> },

            // { path: RoutePaths.auth.signIn, element: <SignIn /> },
            // { path: RoutePaths.auth.signUp, element: <SignUp /> },
            // {
            //   path: RoutePaths.auth.forgotPassword,
            //   element: <ForgotPassword />,
            // },
          ],
        },
        {
          errorElement: (
            <RouteErrorBoundary onReset={() => window.location.reload()} />
          ),
          element: <Private />,
          //   children: [{ path: RoutePaths.dashboard, element: <Dashboard /> }],
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default AppRouter;
