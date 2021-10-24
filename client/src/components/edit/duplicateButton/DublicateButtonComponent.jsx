import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { duplicateCollectionQuestion } from "../../../redux/collections/collectionsActions"
import { selectUserQuestion } from "../../../redux/collections/collectionsSelectors"

import "./duplicateButtonComponent.scss"

const DuplicateButtonComponent = ({ duplicateQuestion, match, question, currentQuestion }) => {
  const { collectionId } = match.params
  if (!currentQuestion) {
    currentQuestion = match.params.currentQuestion
  }

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
