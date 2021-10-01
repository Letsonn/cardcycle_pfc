import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { SignIn } from "./features/SignIn/SignIn";
import App from "./features/App/App";
import SignUp from "./features/SignUp";
import KanbanBoard from "./features/Kanban";

import { isAuthenticated } from "./services/auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <PrivateRoute path="/app" component={App} />
      <PrivateRoute path="/kanban/:id" component={KanbanBoard} />
      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;