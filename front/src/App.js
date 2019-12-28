import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar } from "reactstrap";
import Login from "./containers/Login";
import Register from "./containers/Register";
import ForgotPassword from "./containers/ForgotPassword";

function App() {
  return (
    <div className="App">
      <Navbar color="light" light expand="md">
        <h1>         Squash Apps Machine Test</h1>
      </Navbar>

      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/forgot" exact component={ForgotPassword} />
      </Switch>
    </div>
  );
}

export default App;
