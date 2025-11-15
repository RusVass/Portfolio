import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import PageLoader from "./components/page-loader";
import { appRoutes } from "./config/routes";

const HomePage = lazy(() => import("./routes/home/page"));
const AboutPage = lazy(() => import("./routes/about/page"));
const NotFoundPage = lazy(() => import("./routes/not-found/page"));

function AppRouter(): JSX.Element {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path={appRoutes.home.path} element={<HomePage />} />
        <Route path={appRoutes.about.path} element={<AboutPage />} />
        <Route path={appRoutes.notFound.path} element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}

export default AppRouter;
