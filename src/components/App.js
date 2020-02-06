import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import QuestionShowPage from "./QuestionShowPage";
import { QuestionIndexPage } from "./QuestionIndexPage";
import { WelcomePage } from "./WelcomePage";
import { NavBar } from "./NavBar";

const App = () => {
  return (
    <BrowserRouter>
      <header>
        <NavBar />
      </header>
      <div className="ui container segment">
        <Route exact path="/" component={WelcomePage} />
        <Route exact path="/questions" component={QuestionIndexPage} />
        <Route path="/questions/:id" component={QuestionShowPage} />
      </div>
    </BrowserRouter>
  );
};

export default App;
