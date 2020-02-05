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

  deleteQuestion() {
    this.setState({
      question: null
    });
  }

  render() {
    if (!this.state.question) {
      return (
        <div className="Page">
          <h3 style={{ color: "white", backgroundColor: "red" }}>
            Question doesn't exist
          </h3>
        </div>
      );
    }
    return (
      <div className="Page">
        <QuestionDetails {...this.state.question} />
        <button onClick={() => this.deleteQuestion()}>Delete</button>
        <AnswerList answers={this.state.question.answers} />
      </div>
    );
  }
}

export default QuestionShowPage;
