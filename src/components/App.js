import React from "react";

import QuestionShowPage from "./QuestionShowPage";
import { QuestionIndexPage } from "./QuestionIndexPage";

const App = () => {
  return (
    <div className="ui contianer segment">
      <QuestionIndexPage />
      <QuestionShowPage />
    </div>
  );
};

export default App;
