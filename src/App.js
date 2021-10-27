import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Register from "./pages/Register";
import UploadFile from "./pages/UploadFile";
import UploadUrl from "./pages/UploadUrl";
import IndividualMeme from "./pages/IndividualMeme";

function App() {
  return (
    <>
      <Switch>
        <Route path="/register" exact component={Register} />
        <Route path="/upload-url" exact component={UploadUrl} />
        <Route path="/upload" exact component={UploadFile} />
        <Route path="/memes/:id" exact component={IndividualMeme} />
        <Route
          path={["/", "/meme", "/gif", "/classic", "/hot"]}
          exact
          component={Home}
        />
      </Switch>
    </>
  );
}

export default App;
