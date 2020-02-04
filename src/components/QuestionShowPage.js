import React from "react";

import { QuestionDetails } from "./QuestionDetails";
import { AnswerDetails } from "./AnswerDetails";

const QuestionShowPage = () => {
  return (
    <div>
      <QuestionDetails
        title="What is your favourite color?"
        body="Red, Green, Magenta, etc."
        author={{ full_name: "Michael Owen" }}
        view_count={100}
        created_at={new Date()}
      />
      <AnswerDetails
        body="Green"
        author={{ full_name: "Dylan O'Brien " }}
        created_at={new Date()}
      />
    </div>
  );
};

export default QuestionShowPage;
