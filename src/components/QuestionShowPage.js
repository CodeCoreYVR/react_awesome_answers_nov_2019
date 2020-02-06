import React, { Component } from "react";

import "./css/QuestionShowPage.css";
import { QuestionDetails } from "./QuestionDetails";
import { AnswerList } from "./AnswerList";
import { Question } from "../api/question";
import { Spinner } from "./Spinner";

class QuestionShowPage extends Component {
  constructor(props) {
    // When using a constructor in a class-based
    // component, you must call the 'Component' class
    // constructor with 'super' passing it the 'props'
    super(props);
    this.state = {
      question: null,
      isLoading: true
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
    // All components that are rendered by a <Route> component
    // (like QuestionShowPage) will be given props by that
    // route component. One of these props called "match", which
    // contains information related to the pattern matched path
    // defined in App.js
    // <Route path="/questions/:id/:test/:something" component={QuestionShowPage} />
    // match: {
    //   params: {
    //     id: <whatever-id-is>,
    //     test: <whatever-test-is>,
    //     something: <whatever-something-is>
    //   }
    // }
    Question.one(this.props.match.params.id).then(question => {
      this.setState({ question, isLoading: false });
    });
  }

  render() {
    if (this.state.isLoading) {
      return <Spinner message="Question doesn't exist" />;
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
