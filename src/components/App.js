import React, { useState, useEffect, useCallback } from "react";
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
  const [currentUser, setCurrentUser] = useState(null);
  const [showTime] = useState(true);

  const getUser = useCallback(() => {
    User.current().then(data => {
      if (typeof data.id !== "number") {
        setCurrentUser(null);
      } else {
        setCurrentUser(data);
      }
    });
  }, []);

  const destroySession = () => {
    Session.destroy().then(currentUser(null));
  };

  useEffect(() => {
    getUser();
  }, [getUser]);

  return (
    <BrowserRouter>
      <header>
        <NavBar
          currentUser={currentUser}
          onSignOut={destroySession}
          showTime={showTime}
        />
      </header>
      <div className="ui container segment">
        <Switch>
          <Route exact path="/" component={WelcomePage} />
          <Route exact path="/questions" component={QuestionIndexPage} />
          <AuthRoute
            // The !! turns a statement from "truthy/falsy" to "true/false" respectively
            isAuthenticated={!!currentUser}
            component={QuestionNewPage}
            path="/questions/new"
            exact
          />
          <AuthRoute
            isAuthenticated={!!currentUser}
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
