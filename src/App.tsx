import React, { FC } from "react";
import { Switch, Router, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import "./lib/confirm/confirm.css";
import { GlobalStyle } from "./GlobalStyle";
import { Home } from "./components";
import { ParentContainer } from "./containers";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

const App: FC = () => {
  return (
    <Router history={history}>
      <ToastContainer autoClose={2000} />
      <GlobalStyle />
      <Switch>
        <Route path="/:confirmUuid" component={ParentContainer} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
