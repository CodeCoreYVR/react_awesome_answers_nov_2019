import React from "react";

import "./css/QuestionShowPage.css";
import { QuestionDetails } from "./QuestionDetails";
import { AnswerList } from "./AnswerList";
import oneQuestionData from "../oneQuestionData";

const QuestionShowPage = () => {
  return (
    <div className="Page">
      <QuestionDetails
        title="What is your favourite color?"
        body="Red, Green, Magenta, etc."
        author={{ full_name: "Michael Owen" }}
        view_count={100}
        created_at={new Date()}
      />
      <AnswerList answers={oneQuestionData.answers} />
    </div>
  );
};

export default QuestionShowPage;
