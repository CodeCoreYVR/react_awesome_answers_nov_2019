import React, { useState, useEffect } from "react";

import { Question } from "../../api/question";
import { FormErrors } from "../FormErrors";
import { Spinner } from "../Spinner";

export const QuestionEditPage = props => {
  const [errors, setErrors] = useState([]);
  const [question, setQuestion] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const updateQuestion = event => {
    event.preventDefault();
    const { currentTarget } = event;

    const fd = new FormData(currentTarget);

    const updatedQuestion = {
      title: fd.get("title"),
      body: fd.get("body")
    };

    Question.update(props.match.params.id, updatedQuestion).then(data => {
      if (data.errors) {
        setErrors(data.errors);
      } else {
        props.history.push(`/questions/${data.id}`);
      }
    });
  };

  useEffect(() => {
    Question.one(props.match.params.id).then(question => {
      setQuestion(question);
      setIsLoading(false);
    });
  }, [props.match.params.id]);

  if (isLoading) {
    return <Spinner message="Question doesn't exist to edit" />;
  }

  return (
    <form
      className="NewQuestionForm ui form"
      onSubmit={event => updateQuestion(event)}
    >
      <div className="field">
        <label htmlFor="title">Title</label>
        <FormErrors errors={errors} forField="title" />
        <input
          type="text"
          name="title"
          id="title"
          defaultValue={question.title}
        />
      </div>
      <div className="field">
        <label htmlFor="body">Body</label>
        <FormErrors errors={errors} forField="body" />
        <textarea name="body" id="body" rows="3" defaultValue={question.body} />
      </div>
      <button className="ui orange button" type="submit">
        update Question
      </button>
    </form>
  );
};
