import React from "react";

import { QuestionShowContext } from "./QuestionShowPage";

export const AnswerDetails = props => {
  return (
    <div className="ui segment list">
      <p>
        {props.body} <br />
        By{" "}
        <small
          style={{
            color: "red",
            fontStyle: "italic"
          }}
        >
          {props.author.full_name}
        </small>
      </p>
      <p>Answered {props.created_at.toLocaleString()}</p>
      <QuestionShowContext.Consumer>
        {deleteAnswer => {
          return (
            <button
              className="ui small  red button"
              onClick={() => deleteAnswer(props.id)}
            >
              Delete
            </button>
          );
        }}
      </QuestionShowContext.Consumer>
    </div>
  );
};
