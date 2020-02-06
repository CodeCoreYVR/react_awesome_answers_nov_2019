import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Question } from "../api/question";
import { Spinner } from "./Spinner";

export class QuestionIndexPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // This copies the questions array into
      // a new array that is stored in the state
      // of this component, as the state's questions field
      // questions: data.map(question => question)
      questions: [],
      isLoading: true
    };

    // this.createQuestion = this.createQuestion.bind(this);
  }

  deleteQuestion(id) {
    // To update state ALWAYS use 'setState(...)' method

    // You can use setState by passing an object to its first argument.
    // Whe the time comes, the object will be merged with the current state

    // This will change whatever properties are within the current state
    // this.setState({
    //   questions: this.state.questions.filter(q => q.id !== id)
    // });

    // You can also use setState by giving a callback as a first argument
    // that receives the current state an dprops as arguments.
    // It must return an object that will be merge with the state
    this.setState((state, props) => {
      return {
        questions: state.questions.filter(q => q.id !== id)
      };
    });
  }

  componentDidMount() {
    Question.all().then(questions => {
      this.setState({ questions, isLoading: false });
    });
  }

  render() {
    if (this.state.isLoading) {
      return <Spinner message="Wait to load the list of questions" />;
    }
    return (
      <main>
        <h2 className="ui horizontal divider header">Questions</h2>
        <ul className="ui list">
          {this.state.questions.map(question => (
            <li className="item" key={question.id}>
              <Link
                to={`/questions/${question.id}`}
                className="ui link"
                href=""
              >
                {question.title}
              </Link>
              <button
                className="ui small right floated red button"
                onClick={() => this.deleteQuestion(question.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </main>
    );
  }
}
