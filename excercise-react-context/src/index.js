import React from "react";
import ReactDOM from "react-dom";
import Provider from "./state/Provider";
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import Home from './pages/home';
ReactDOM.render(
  <React.StrictMode>
  <Provider>
     <Router>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
