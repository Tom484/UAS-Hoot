import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { duplicateCollectionQuestion } from "../../../redux/collections/collectionsActions"
import { selectUserQuestion } from "../../../redux/collections/collectionsSelectors"

import "./duplicateQuestionButtonComponent.scss"

const DuplicateButtonComponent = ({
  duplicateQuestion,
  match,
  question,
  currentQuestion,
  collectionId,
  questionId,
  children,
}) => {
  collectionId = collectionId || match.params.collectionId
  questionId = questionId || question.id

  const clickHandler = () => {
    duplicateQuestion({
      collectionId,
      questionId: question.id,
      currentQuestion: currentQuestion,
    })
  }

  if (children) return <span onClick={clickHandler}>{children}</span>
  return <button onClick={clickHandler}>Duplicate</button>
}

const mapStateToProps = (state, ownProps) => {
  const { collectionId, currentQuestion } = ownProps.match.params
  return {
    question: selectUserQuestion(collectionId, currentQuestion)(state),
  }
}

const mapDispatchToProps = dispatch => ({
  duplicateQuestion: ids => dispatch(duplicateCollectionQuestion(ids)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DuplicateButtonComponent))
