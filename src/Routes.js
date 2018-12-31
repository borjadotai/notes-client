import React from "react";
import { Route, Switch } from "react-router-dom";
import Loadable from "react-loadable";
import LoadingComponent from "./components/LoadingComponent";
import AppliedRoute from "./components/AppliedRoute";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";

const AsyncHome = Loadable({
  loader: () => import("./containers/Home"),
  loading: LoadingComponent
});
const AsyncLogin = Loadable({
  loader: () => import("./containers/Login"),
  loading: LoadingComponent
});
const AsyncNotes = Loadable({
  loader: () => import("./containers/Notes"),
  loading: LoadingComponent
});
const AsyncSignup = Loadable({
  loader: () => import("./containers/Signup"),
  loading: LoadingComponent
});
const AsyncNewNote = Loadable({
  loader: () => import("./containers/NewNote"),
  loading: LoadingComponent
});
const AsyncNotFound = Loadable({
  loader: () => import("./containers/NotFound"),
  loading: LoadingComponent
});
const AsyncSettings = Loadable({
  loader: () => import("./containers/Settings"),
  loading: LoadingComponent
});
const AsyncResetPassword = Loadable({
  loader: () => import("./containers/ResetPassword"),
  loading: LoadingComponent
});
const AsyncChangePassword = Loadable({
  loader: () => import("./containers/ChangePassword"),
  loading: LoadingComponent
});
const AsyncChangeEmail = Loadable({
  loader: () => import("./containers/ChangeEmail"),
  loading: LoadingComponent
});

export default ({ childProps }) => (
  <Switch>
    <AppliedRoute path="/" exact component={AsyncHome} props={childProps} />
    <UnauthenticatedRoute
      path="/login"
      exact
      component={AsyncLogin}
      props={childProps}
    />
    <UnauthenticatedRoute
      path="/signup"
      exact
      component={AsyncSignup}
      props={childProps}
    />
    <AuthenticatedRoute
      path="/settings"
      exact
      component={AsyncSettings}
      props={childProps}
    />
    <UnauthenticatedRoute
      path="/login/reset"
      exact
      component={AsyncResetPassword}
      props={childProps}
    />
    <AuthenticatedRoute
      path="/settings/password"
      exact
      component={AsyncChangePassword}
      props={childProps}
    />
    <AuthenticatedRoute
      path="/settings/email"
      exact
      component={AsyncChangeEmail}
      props={childProps}
    />
    <AuthenticatedRoute
      path="/notes/new"
      exact
      component={AsyncNewNote}
      props={childProps}
    />
    <AuthenticatedRoute
      path="/notes/:id"
      exact
      component={AsyncNotes}
      props={childProps}
    />
    {/* Finally, catch all unmatched routes */}
    <Route component={AsyncNotFound} />
  </Switch>
);
