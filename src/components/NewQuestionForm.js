import React from "react";

const NewQuestionForm = props => {
  const handleSubmit = event => {
    event.preventDefault();
    const { currentTarget } = event;
    const fd = new FormData(currentTarget);

    const newQuestion = {
      title: fd.get("title"),
      body: fd.get("body"),
      created_at: new Date()
    };

    // call create method in QuestionsIndex to create a question
    // which in our case just prepending a question to the list
    // of questions in QuestionsIndex state
    props.onCreateQuestion(newQuestion);

    currentTarget.reset();
  };
  return (
    <form className="NewQuestionForm ui form" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" />
      </div>
      <div className="field">
        <label htmlFor="body">Body</label>
        <textarea name="body" id="body" rows="3" />
      </div>
      <button class="ui orange button" type="submit">
        Create Question
      </button>
    </form>
  );
};

export default NewQuestionForm;
