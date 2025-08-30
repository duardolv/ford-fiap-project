import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Root } from "@/layouts/Root";
import Public from "@/layouts/Public";
import Private from "@/layouts/Private";

import Dashboard from "@/pages/Dashboard";
import { RoutePaths } from "./routes";
import { ErrorBoundary, RouteErrorBoundary } from "@/ErrorBoundary";
import AboutPage from "@/pages/About";
import BestPracticesPage from "@/pages/BestPractices";
import DemoPage from "@/pages/Demo";
import ExamplesPage from "@/pages/Examples";
import FAQPage from "@/pages/FAQ";
import FeaturesPage from "@/pages/Features";
import GuidePage from "@/pages/Guide";
import HelpPage from "@/pages/Help";
import RoadmapPage from "@/pages/Roadmap";
import CodeLiftPage from "@/pages/CodeLift";
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
            { path: RoutePaths.about, element: <AboutPage /> },
            { path: RoutePaths.features, element: <FeaturesPage /> },
            { path: RoutePaths.codeLift, element: <CodeLiftPage /> },
            { path: RoutePaths.learn.guide, element: <GuidePage /> },
            { path: RoutePaths.learn.examples, element: <ExamplesPage /> },
            { path: RoutePaths.learn.bestPractices, element: <BestPracticesPage /> },
            { path: RoutePaths.roadmap, element: <RoadmapPage /> },
            { path: RoutePaths.support.demo, element: <DemoPage /> },
            { path: RoutePaths.support.faq, element: <FAQPage /> },
            { path: RoutePaths.support.help, element: <HelpPage /> },

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
