import React from "react";

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
      <button
        className="ui small  red button"
        onClick={() => props.onDeleteClick(props.id)}
      >
        Delete
      </button>
    </div>
  );
};
