import React from "react"
import SelectAnswerComponent from "../selectAnswer/SelectAnswerComponent"

import "./selectAnswersComponent.scss"

const SelectAnswersComponent = ({ answers, questionId, collectionId }) => {
  return (
    <div className="select-answers-component">
      {answers.map((answer, i) => (
        <SelectAnswerComponent
          key={i}
          order={i + 1}
          answer={answer}
          questionId={questionId}
          collectionId={collectionId}
        />
      ))}
    </div>
  )
}

export default SelectAnswersComponent
