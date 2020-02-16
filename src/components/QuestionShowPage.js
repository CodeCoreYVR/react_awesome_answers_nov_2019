import React, { useState, useEffect } from "react";

import "./css/QuestionShowPage.css";
import { QuestionDetails } from "./QuestionDetails";
import { AnswerList } from "./AnswerList";
import { Question } from "../api/question";
import { Spinner } from "./Spinner";

const QuestionShowPage = props => {
  const [questionShow, setQuestionShow] = useState({
    question: null,
    isLoading: true
  });

  const deleteQuestion = () => {
    Question.destroy(questionShow.question.id).then(data => {
      props.history.push("/questions");
    });
  };

  const deleteAnswer = id => {
    const newAnswers = questionShow.question.answers.filter(a => a.id !== id);
    setQuestionShow({
      ...questionShow,
      question: { ...questionShow.question, answers: newAnswers }
    });
  };

  useEffect(() => {
    Question.one(props.match.params.id).then(question => {
      setQuestionShow({ question, isLoading: false });
    });
  }, []);

  if (questionShow.isLoading) {
    return <Spinner message="Question doesn't exist" />;
  }
  return (
    <div className="Page">
      <QuestionDetails {...questionShow.question} />
      <button
        className="ui small right floated red button"
        onClick={() => deleteQuestion()}
      >
        Delete
      </button>
      <AnswerList
        answers={questionShow.question.answers}
        onAnswerDeleteClick={id => deleteAnswer(id)}
      />
    </div>
  );
};

export default QuestionShowPage;
