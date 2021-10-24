import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { removeCollectionQuestion } from "../../../redux/collections/collectionsActions"
import DuplicateButtonComponent from "../duplicateButton/DublicateButtonComponent"

import "./slideOverviewComponent.scss"

const SlideOverviewComponent = ({ question, removeQuestion, match, order, history }) => {
  const { collectionId, currentQuestion } = match.params
  return (
    <div>
      <div className="label" onClick={() => history.push(`/edit/${collectionId}/${order + 1}`)}>
        {question?.question}
      </div>
      <button
        onClick={() =>
          removeQuestion({
            collectionId,
            questionId: question.id,
          })
        }
      >
        Remove
      </button>
      <DuplicateButtonComponent currentQuestion={currentQuestion} />
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  removeQuestion: ids => dispatch(removeCollectionQuestion(ids)),
})

export default withRouter(connect(null, mapDispatchToProps)(SlideOverviewComponent))
