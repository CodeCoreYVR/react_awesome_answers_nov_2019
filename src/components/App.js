import React, { Component } from "react";
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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    };

    this.getUser = this.getUser.bind(this);
    this.destroySession = this.destroySession.bind(this);
  }

  getUser() {
    User.current().then(data => {
      if (typeof data.id !== "number") {
        this.setState({ currentUser: null });
      } else {
        this.setState({ currentUser: data });
      }
    });
  }

  destroySession() {
    Session.destroy().then(this.setState({ currentUser: null }));
  }

  componentDidMount() {
    this.getUser();
  }

  render() {
    return (
      <BrowserRouter>
        <header>
          <NavBar
            currentUser={this.state.currentUser}
            onSignOut={this.destroySession}
          />
        </header>
        <div className="ui container segment">
          <Switch>
            <Route exact path="/" component={WelcomePage} />
            <Route exact path="/questions" component={QuestionIndexPage} />
            <AuthRoute
              // The !! turns a statement from "truthy/falsy" to "true/false" respectively
              isAuthenticated={!!this.state.currentUser}
              component={QuestionNewPage}
              path="/questions/new"
              exact
            />
            <AuthRoute
              isAuthenticated={!!this.state.currentUser}
              component={QuestionShowPage}
              path="/questions/:id"
              exact
            />
            <Route
              path="/sign_up"
              render={routeProps => (
                <SignUpPage {...routeProps} onSignUp={this.getUser} />
              )}
            />
            <Route
              path="/sign_in"
              render={routeProps => (
                <SignInPage {...routeProps} onSignIn={this.getUser} />
              )}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
