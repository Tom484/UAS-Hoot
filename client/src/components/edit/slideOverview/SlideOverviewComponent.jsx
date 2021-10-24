import React from "react"
import { withRouter } from "react-router-dom"
import { ICONCopyOutline, ICONTrashOutline } from "../../../icons/Icons"
import DuplicateQuestionButtonComponent from "../duplicateQuestionButton/DublicateQuestionButtonComponent"
import RemoveQuestionButtonComponent from "../removeQuestionButton/RemoveQuestionButtonComponent"

import "./slideOverviewComponent.scss"

const SlideOverviewComponent = ({ question, match, order, history }) => {
  const { collectionId, currentQuestion } = match.params

  return (
    <div className="overview-slide">
      <div className="slide-label">
        <div>{order + 1}.</div>
        <div className="icon-container">
          <RemoveQuestionButtonComponent questionId={question.id}>
            <ICONTrashOutline className="svg-icon-small-size svg-icon-default-color svg-icon-pointer" />
          </RemoveQuestionButtonComponent>
          <DuplicateQuestionButtonComponent currentQuestion={order + 1}>
            <ICONCopyOutline className="svg-icon-small-size svg-icon-default-color svg-icon-pointer" />
          </DuplicateQuestionButtonComponent>
        </div>
      </div>
      <div
        className={`slide-preview ${order + 1 === parseInt(currentQuestion) ? "active-slide" : ""}`}
        onClick={() => history.push(`/edit/${collectionId}/${order + 1}`)}
      >
        <div className="question-label">{question.question || "Question"}</div>
        <div className="time-label">{question.time}</div>
        <div className="answers-container">
          {Object.values(question.answers).map((answer, i) => (
            <div key={i} className={`answer-container ${answer.correct ? "active-answer" : ""}`}>
              <div className="answer-label">{answer.answer || "Answer"}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default withRouter(SlideOverviewComponent)
