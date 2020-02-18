import React, { useState } from "react";

import { Question } from "../../api/question";
import { FormErrors } from "../FormErrors";

export const QuestionNewPage = props => {
  const [errors, setErrors] = useState([]);

  const createQuestion = event => {
    event.preventDefault();
    const { currentTarget } = event;
    const fd = new FormData(currentTarget);

    const newQuestion = {
      title: fd.get("title"),
      body: fd.get("body")
    };

    Question.create(newQuestion).then(data => {
      if (data.errors) {
        setErrors(data.errors);
        console.log("errors: ", errors);
      } else {
        props.history.push(`/questions/${data.id}`);
      }
    });

    currentTarget.reset();
  };
  return (
    <form
      className="NewQuestionForm ui form"
      onSubmit={event => createQuestion(event)}
    >
      <div className="field">
        <label htmlFor="title">Title</label>
        <FormErrors errors={errors} forField="title" />
        <input type="text" name="title" id="title" />
      </div>
      <div className="field">
        <label htmlFor="body">Body</label>
        <FormErrors errors={errors} forField="body" />
        <textarea name="body" id="body" rows="3" />
      </div>
      <button className="ui orange button" type="submit">
        Create Question
      </button>
    </form>
  );
};
