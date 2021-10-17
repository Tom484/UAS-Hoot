import React from "react"
import AnswerComponent from "../answer/AnswerComponent"

import TextareaAutosize from "react-textarea-autosize"

import "./questionComponent.scss"

const CreateQuestion = ({ collection }) => {
  const testingCollection = Object.values(collection.questions)[0]
  const testingAnswers = Object.values(testingCollection.answers)
  return (
    <div className="create-question-component">
      <TextareaAutosize
        value={testingCollection.question}
        className="textarea-create textarea-question"
      />
      <div className="answers-container">
        {testingAnswers.map((answer, index) => (
          <AnswerComponent key={answer.id} answer={answer} questionId={index + 1} />
        ))}
      </div>
    </div>
  )
}

export default CreateQuestion
