import React from "react"
import AnswerComponent from "../answer/AnswerComponent"

import TextareaAutosize from "react-textarea-autosize"

import "./questionComponent.scss"

const CreateQuestion = () => {
  return (
    <div className="create-question-component">
      <TextareaAutosize className="textarea-create textarea-question" />
      <div className="answers-container">
        <AnswerComponent questionId={1} />
        <AnswerComponent questionId={2} />
        <AnswerComponent questionId={3} />
        <AnswerComponent questionId={4} />
      </div>
    </div>
  )
}

export default CreateQuestion
