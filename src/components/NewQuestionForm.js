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
    <form className="NewQuestionForm" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <br />
        <input type="text" name="title" id="title" />
      </div>

      <div>
        <label htmlFor="body">Body</label>
        <br />
        <textarea name="body" id="body" />
      </div>
      <div>
        <input type="submit" value="Create Question" />
      </div>
    </form>
  );
};

export default NewQuestionForm;
