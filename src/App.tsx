import React from "react";
import "./App.css";

// import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Header from "./systems/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Router>
        <Switch>
          <Route exact path="/" component={Header} />
        </Switch>
      </Router> */}
    </div>
  );
}

export default App;
