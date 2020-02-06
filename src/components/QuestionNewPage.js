import React, { Component } from "react";

import { Question } from "../api/question";

export class QuestionNewPage extends Component {
  createQuestion = event => {
    event.preventDefault();
    const { currentTarget } = event;
    const fd = new FormData(currentTarget);

    const newQuestion = {
      title: fd.get("title"),
      body: fd.get("body")
    };

    Question.create(newQuestion).then(data => {
      if (!data.errors) {
        // redirect user to that question to QuestionShowPage

        // This 'history' prop is provided by the <Route />
        // component from react-router. It has a bunch of methods
        // to manipulate browser. You can use 'push' to direct a user
        // to any page in our app
        this.props.history.push(`/questions/${data.id}`);
      }
    });

    currentTarget.reset();
  };
  render() {
    return (
      <form
        className="NewQuestionForm ui form"
        onSubmit={event => this.createQuestion(event)}
      >
        <div className="field">
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" />
        </div>
        <div className="field">
          <label htmlFor="body">Body</label>
          <textarea name="body" id="body" rows="3" />
        </div>
        <button className="ui orange button" type="submit">
          Create Question
        </button>
      </form>
    );
  }
}
