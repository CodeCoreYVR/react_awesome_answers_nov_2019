import React, { Component } from "react";

import "./css/QuestionShowPage.css";
import { QuestionDetails } from "./QuestionDetails";
import { AnswerList } from "./AnswerList";
import oneQuestionData from "../oneQuestionData";

class QuestionShowPage extends Component {
  constructor(props) {
    // When using a constructor in a class-based
    // component, you must call the 'Component' class
    // constructor with 'super' passing it the 'props'
    super(props);
    this.state = {
      question: oneQuestionData
    };
  }
  render() {
    return (
      <div className="Page">
        <QuestionDetails {...this.state.question} />
        <AnswerList answers={this.state.question.answers} />
      </div>
    );
  }
}

export default QuestionShowPage;
