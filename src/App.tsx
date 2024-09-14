import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import Layout from "./layout";
import {
  publicRoutes,
  privateRoutes,
  authenticationRoutes,
} from "@/routes/routes.config";
import NotFound from "@/pages/notFound";
import MainLoading from "./components/shared/MainLoading";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* private routes with protected routes */}
          <Route path="/" element={<Layout />}>
            {privateRoutes.map((route) => (
              <Route
                path={route.path}
                key={route.key}
                element={<ProtectedRoutes />}
              >
                <Route
                  key={route.key}
                  path={route.path}
                  element={
                    <Suspense fallback={<p>Loading..,</p>}>
                      {route.element}
                    </Suspense>
                  }
                />
              </Route>
            ))}
          </Route>

          {/* public routes */}
          <Route path="/" element={<Layout />}>
            {publicRoutes.map((route) => (
              <Route
                index={route.key === "welcome"}
                path={route.path}
                key={route.key}
                element={
                  <Suspense fallback={<MainLoading />}>
                    {route.element}
                  </Suspense>
                }
              />
            ))}
          </Route>

          {/* Auth routes */}
          <Route path="/">
            {authenticationRoutes.map((route) => (
              <Route
                key={route.key}
                path={route.path}
                element={
                  <Suspense fallback={<MainLoading />}>
                    {route.element}
                  </Suspense>
                }
              />
            ))}
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
