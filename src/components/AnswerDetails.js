import React from "react";

export const AnswerDetails = props => {
  return (
    <div>
      <p>
        {props.body} <br />
        By {props.author.full_name}
      </p>
      <p>Answered {props.created_at.toLocaleString()}</p>
    </div>
  );
};
