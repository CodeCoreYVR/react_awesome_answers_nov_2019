import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

// A react component is a function that returns a react element.
// PascalCase is the naming convention for react components.
// Components whose names does not begin with a capital letter,
// will be interpretted as a plain HTML tag.

// QuestionDetails component
const QuestionDetails = props => {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>
        {props.body} <br />
        By {props.author.full_name}
      </p>
      <small>
        Seen {props.view_count} times - {props.created_at.toLocaleString()}
      </small>
    </div>
  );
};

// AnswerDetails component
const AnswerDetails = props => {
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

// QuestionShowPage component
const QuestionShowPage = () => {
  return (
    <div>
      <QuestionDetails
        title="What is your favourite color?"
        body="Red, Green, Magenta, etc."
        author={{ full_name: "Michael Owen" }}
        view_count={100}
        created_at={new Date()}
      />
      <AnswerDetails
        body="Green"
        author={{ full_name: "Dylan O'Brien " }}
        created_at={new Date()}
      />
    </div>
  );
};

// In JSX, self-closing tags must be closed. <img> doesn't work,
// you must write <img />

ReactDOM.render(<QuestionShowPage />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
