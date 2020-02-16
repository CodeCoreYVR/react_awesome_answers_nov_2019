import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import QuestionShowPage from "./QuestionShowPage";
import { QuestionIndexPage } from "./QuestionIndexPage";
import { WelcomePage } from "./WelcomePage";
import { NavBar } from "./NavBar";
import { QuestionNewPage } from "./QuestionNewPage";
import { SignInPage } from "./SignInPage";
import { User } from "../api/user";
import { Session } from "../api/session";
import { AuthRoute } from "./AuthRoute";
import { SignUpPage } from "./SignUpPage";

const App = () => {
  const [appState, setAppState] = useState({
    currentUser: null,
    showTime: true
  });

  const getUser = () => {
    User.current().then(data => {
      if (typeof data.id !== "number") {
        setAppState({ ...appState, currentUser: null });
      } else {
        setAppState({ ...appState, currentUser: data });
      }
    });
  };

  const destroySession = () => {
    Session.destroy().then(setAppState({ ...appState, currentUser: null }));
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <BrowserRouter>
      <header>
        <NavBar
          currentUser={appState.currentUser}
          onSignOut={destroySession}
          showTime={appState.showTime}
        />
      </header>
      <div className="ui container segment">
        <Switch>
          <Route exact path="/" component={WelcomePage} />
          <Route exact path="/questions" component={QuestionIndexPage} />
          <AuthRoute
            // The !! turns a statement from "truthy/falsy" to "true/false" respectively
            isAuthenticated={!!appState.currentUser}
            component={QuestionNewPage}
            path="/questions/new"
            exact
          />
          <AuthRoute
            isAuthenticated={!!appState.currentUser}
            component={QuestionShowPage}
            path="/questions/:id"
            exact
          />
          <Route
            path="/sign_up"
            render={routeProps => (
              <SignUpPage {...routeProps} onSignUp={getUser} />
            )}
          />
          <Route
            path="/sign_in"
            render={routeProps => (
              <SignInPage {...routeProps} onSignIn={getUser} />
            )}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
