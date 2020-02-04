import React from "react";

export const AnswerDetails = props => {
  return (
    <div>
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
    </div>
  );
};
