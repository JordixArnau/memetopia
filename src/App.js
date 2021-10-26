import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <Switch>
        <Route path="/register" exact component={Register} />
        <Route path="/" exact component={Home} />
      </Switch>
    </>
  );
}

export default App;
