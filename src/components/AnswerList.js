import React from "react";

import { AnswerDetails } from "./AnswerDetails";

export const AnswerList = props => {
  return (
    <ul>
      {props.answers.map(answer => (
        <AnswerDetails
          key={answer.id}
          body={answer.body}
          author={answer.author}
          created_at={new Date(answer.created_at)}
        />
      ))}
    </ul>
  );
};
