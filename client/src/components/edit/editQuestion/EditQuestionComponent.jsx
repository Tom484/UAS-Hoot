import React from "react"
import TextareaAutosize from "react-textarea-autosize"

import {
  selectUserCollections,
  selectUserCollection,
  selectUserQuestions,
} from "../../../redux/collections/collectionsSelectors"

import "./editQuestionComponent.scss"
import SelectAnswersComponent from "../selectAnswers/SelectAnswersComponent"
import { editCollectionSelectQuestion } from "../../../redux/collections/collectionsActions"
import { connect } from "react-redux"

const EditQuestionComponent = ({
  editPageValues: { collectionId, question, questionId },
  editQuestion,
}) => {
  const answers = [...Object.values(question.answers)]

  const handleQuestionQuestion = e => {
    editQuestion({ collectionId, questionId, properties: { question: e.target.value } })
  }

  return (
    <div className="create-question-component">
      <TextareaAutosize
        onChange={handleQuestionQuestion}
        value={question.question}
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

// const mapStateToProps = (state, ownProps) => ({
//   // collections: selectUserCollections(state),
//   // collection: selectUserCollection(ownProps.match.params.collectionId)(state),
//   // questions: selectUserQuestions(ownProps.match.params.collectionId)(state),
// })

const mapDispatchToProps = dispatch => ({
  editQuestion: idsAndProperties => dispatch(editCollectionSelectQuestion(idsAndProperties)),
})

export default connect(null, mapDispatchToProps)(EditQuestionComponent)
