import React from "react"
import TextareaAutosize from "react-textarea-autosize"

import "./editQuestionComponent.scss"
import SelectAnswersComponent from "../selectAnswers/SelectAnswersComponent"
import { editCollectionSelectQuestion } from "../../../redux/collections/collectionsActions"
import { connect } from "react-redux"

const EditQuestionComponent = ({ questions, collectionId, editQuestion }) => {
  const answers = Object.values(questions.answers)
  const questionId = questions.id

  const handleQuestionQuestion = e => {
    editQuestion({ collectionId, questionId, properties: { question: e.target.value } })
  }

  return (
    <div className="create-question-component">
      <TextareaAutosize
        onChange={handleQuestionQuestion}
        value={questions.question}
        className="textarea-create textarea-question"
      />
      <SelectAnswersComponent
        answers={answers}
        questionId={questionId}
        collectionId={collectionId}
      />
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  editQuestion: idsAndProperties => dispatch(editCollectionSelectQuestion(idsAndProperties)),
})

export default connect(null, mapDispatchToProps)(EditQuestionComponent)
