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
}) => {
  collectionId = collectionId || match.params.collectionId
  questionId = questionId || question.id

  return (
    <button
      onClick={() =>
        duplicateQuestion({
          collectionId,
          questionId: question.id,
          currentQuestion,
        })
      }
    >
      Duplicate
    </button>
  )
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
