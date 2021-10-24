import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { removeCollectionQuestion } from "../../../redux/collections/collectionsActions"
import { selectUserQuestion } from "../../../redux/collections/collectionsSelectors"

import "./removeQuestionButtonComponent.scss"

const RemoveQuestionButtonComponent = ({
  removeQuestion,
  collectionId,
  questionId,
  match,
  question,
}) => {
  collectionId = collectionId || match.params.collectionId
  questionId = questionId || question.id

  const clickHandler = () => {
    removeQuestion({ collectionId, questionId })
  }
  return <button onClick={clickHandler}>Remove</button>
}

const mapStateToProps = (state, ownProps) => {
  const { collectionId, currentQuestion } = ownProps.match.params

  return {
    question: selectUserQuestion(collectionId, currentQuestion)(state),
  }
}

const mapDispatchToProps = dispatch => ({
  removeQuestion: ids => dispatch(removeCollectionQuestion(ids)),
})

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(RemoveQuestionButtonComponent)
)
