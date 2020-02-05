import React, { Component } from "react";

import data from "../questionData";

export class QuestionIndexPage extends Component {
  render() {
    return (
      <main>
        <h2>Questions</h2>
        <ul
          style={{
            listStyle: "none",
            paddigLeft: 0
          }}
        >
          {data.map(question => (
            <li key={question.id} style={{ padding: "0.2em" }}>
              <a href="">{question.title}</a>
            </li>
          ))}
        </ul>
      </main>
    );
  }
}
