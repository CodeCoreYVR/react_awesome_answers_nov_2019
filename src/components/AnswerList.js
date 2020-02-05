import React from "react";

import { AnswerDetails } from "./AnswerDetails";

export const AnswerList = props => {
  return (
    <ul>
      {props.answers.map(answer => (
        <AnswerDetails
          key={answer.id}
          {...answer}
          onDeleteClick={props.onAnswerDeleteClick}
        />
      ))}
    </ul>
  );
};
