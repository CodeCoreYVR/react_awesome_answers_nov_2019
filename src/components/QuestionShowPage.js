import React, { Component } from "react";

import "./css/QuestionShowPage.css";
import { QuestionDetails } from "./QuestionDetails";
import { AnswerList } from "./AnswerList";
import { Question } from "../api/question";

class QuestionShowPage extends Component {
  constructor(props) {
    // When using a constructor in a class-based
    // component, you must call the 'Component' class
    // constructor with 'super' passing it the 'props'
    super(props);
    this.state = {
      question: null
    };
  }

  deleteQuestion() {
    this.setState({
      question: null
    });
  }

  deleteAnswer(id) {
    this.setState({
      question: {
        ...this.state.question,
        answers: this.state.question.answers.filter(a => a.id !== id)
      }
    });
  }

  componentDidMount() {
    Question.one(28).then(question => {
      this.setState({ question });
    });
  }

  render() {
    if (!this.state.question) {
      return (
        <div className="Page">
          <h3 className="ui red header">Question doesn't exist</h3>
        </div>
      );
    }
    return (
      <div className="Page">
        <QuestionDetails {...this.state.question} />
        <button
          className="ui small right floated red button"
          onClick={() => this.deleteQuestion()}
        >
          Delete
        </button>
        <AnswerList
          answers={this.state.question.answers}
          onAnswerDeleteClick={id => this.deleteAnswer(id)}
        />
      </div>
    );
  }
}

export default QuestionShowPage;
