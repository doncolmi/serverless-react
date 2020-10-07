import React from "react";
import "./App.css";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Header from "./systems/Header/Header";
import Main from "./pages/Main";
import NewsList from "./pages/News/NewsList";
import NewsDetail from "./pages/News/NewsDetail";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/news" component={NewsList} />
          <Route exact path="/news/:newsId" component={NewsDetail} />
        </Switch>
        <footer>
          <p>Copyright 뭐라쓸지고민중. All rights reserved.</p>
          <address>
            Contact webmaster for more information. wowtnnk@gmail.com
          </address>
        </footer>
      </div>
    </Router>
  );
}

export default App;
