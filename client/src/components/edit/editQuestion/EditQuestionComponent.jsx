import React from "react"
import TextareaAutosize from "react-textarea-autosize"

import "./editQuestionComponent.scss"
import SelectAnswersComponent from "../selectAnswers/SelectAnswersComponent"

const EditQuestionComponent = ({ questions, collectionId }) => {
  const answers = Object.values(questions.answers)
  const questionId = questions.id

  return (
    <div className="create-question-component">
      <TextareaAutosize value={questions.question} className="textarea-create textarea-question" />
      <SelectAnswersComponent
        answers={answers}
        questionId={questionId}
        collectionId={collectionId}
      />
    </div>
  )
}

export default EditQuestionComponent
