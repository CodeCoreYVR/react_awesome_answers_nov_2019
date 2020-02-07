import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import QuestionShowPage from "./QuestionShowPage";
import { QuestionIndexPage } from "./QuestionIndexPage";
import { WelcomePage } from "./WelcomePage";
import { NavBar } from "./NavBar";
import { QuestionNewPage } from "./QuestionNewPage";
import { SignInPage } from "./SignInPage";
import { User } from "../api/user";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    };

    this.getUser = this.getUser.bind(this);
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

  componentDidMount() {
    this.getUser();
  }

  render() {
    return (
      <BrowserRouter>
        <header>
          <NavBar currentUser={this.state.currentUser} />
        </header>
        <div className="ui container segment">
          <Switch>
            <Route exact path="/" component={WelcomePage} />
            <Route exact path="/questions" component={QuestionIndexPage} />
            <Route exact path="/questions/new" component={QuestionNewPage} />
            <Route path="/questions/:id" component={QuestionShowPage} />
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
