import React from "react"
import { ICONTickSquareBold } from "../../../icons/Icons"
import TextareaAutosize from "react-textarea-autosize"

import "./answerComponent.scss"

const AnswerComponent = ({ questionId }) => {
  return (
    <div className="answer-component">
      <span>{questionId}</span>
      <TextareaAutosize className="textarea-create" />
      <ICONTickSquareBold className="svg-icon-default-size svg-icon-default-color svg-icon-tick-square" />
    </div>
  )
}

export default AnswerComponent
