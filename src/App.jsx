import { Suspense } from "react";
import Loader from "./components/Employee/Global/Loader";
import { Route, Routes } from "react-router-dom";
import { routes } from "./constants/routes";
import ScrollToTopButton from "./components/Employee/Global/ScrollToTopButton";

function App() {

  return (
    <Suspense fallback={<Loader />}>
      <ScrollToTopButton/>
      <Routes>
        {routes.map((route, index) => {
          return <Route path={route.url} element={route.page} key={index} />;
        })}
      </Routes>
    </Suspense>
  );
}

export default App;
