import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import routes from "../assets/routes";

function App() {
  return (
    <Suspense fallback={<h1>...loading</h1>}>
      <Switch>
        {routes.map((route) => (
          <Route key={route.label} {...route} />
        ))}
      </Switch>
    </Suspense>
  );
}

export default App;
