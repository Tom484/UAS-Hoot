import React from "react"
import TextareaAutosize from "react-textarea-autosize"
import { ICONTickSquareBold } from "../../../icons/Icons"

import "./selectAnswerComponent.scss"

const SelectAnswerComponent = ({ answer, order, questionId, collectionId }) => {
  return (
    <div className="select-answer-component">
      <span className="order">{order}</span>
      <TextareaAutosize className="textarea-create textarea" value={answer.answer} />
      <ICONTickSquareBold
        className={`svg-icon-default-size icon ${answer.correct ? "checked" : ""}`}
      />
    </div>
  )
}

export default SelectAnswerComponent
