import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Location from "./views/Location";
import './App.css';
import Home from "./views/Home";
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
    path: "/",
    exact: true,
    element: Location,
  },
  {
    path: "/l",
    exact: true,
    element: Home,
  },
];
export default App;
