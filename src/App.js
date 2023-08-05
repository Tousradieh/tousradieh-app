import React from "react";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Location from "./views/Location";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              element={<route.element />}
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

const routes = [
  {
    path: "/location",
    exact: true,
    element: Location,
  },
];
export default App;
