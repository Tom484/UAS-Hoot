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
import { withRouter } from "react-router-dom"

const EditQuestionComponent = ({
  editPageValues: { collectionId, question, questionId, answers },
  editQuestion,
  userCollections,
  userCollection,
  userQuestion,
}) => {
  const handleQuestionQuestion = e => {
    editQuestion({
      collectionId,
      questionId,
      properties: { question: e.target.value },
    })
  }

  console.log(userCollections)
  console.log(userCollection)
  console.log(userQuestion)

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

const mapStateToProps = (state, ownProps) => ({
  userCollections: state.collections.userCollections,
  userCollection: state.collections.userCollections[ownProps.match.params.collectionId],
  userQuestion:
    state.collections.userCollections[ownProps.match.params.collectionId].questions[
      ownProps.match.params.questionOrder
    ],
})

const mapDispatchToProps = dispatch => ({
  editQuestion: idsAndProperties => dispatch(editCollectionSelectQuestion(idsAndProperties)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditQuestionComponent))
