import React from "react";

import { AnswerDetails } from "./AnswerDetails";

export const AnswerList = props => {
  return (
    <div
      style={{
        marginTop: "4em"
      }}
    >
      <h2 className="ui horizontal divider header">Answers</h2>
      <ul className="ui list">
        {props.answers.map(answer => (
          <AnswerDetails
            key={answer.id}
            {...answer}
            onDeleteClick={props.onAnswerDeleteClick}
          />
        ))}
      </ul>
    </div>
  );
};
