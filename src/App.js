import "./App.css";
import { Switch, BrowserRouter as Router } from "react-router-dom";
import React from "react";

import { authProtectedRoutes, publicRoutes } from "./routes/";
import AppRoute from "./routes/route";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          {publicRoutes.map((route, idx) => (
            <AppRoute
              path={route.path}
              component={route.component}
              key={idx}
              isAuthProtected={false}
            />
          ))}

          {authProtectedRoutes.map((route, idx) => (
            <AppRoute
              path={route.path}
              component={route.component}
              key={idx}
              isAuthProtected={true}
            />
          ))}
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
