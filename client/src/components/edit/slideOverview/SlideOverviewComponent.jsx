import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { removeCollectionQuestion } from "../../../redux/collections/collectionsActions"

import "./slideOverviewComponent.scss"

const SlideOverviewComponent = ({ question, removeQuestion, match, order, history }) => {
  const { collectionId } = match.params
  return (
    <div>
      <div className="label" onClick={() => history.push(`/edit/${collectionId}/${order + 1}`)}>
        {question?.question}
      </div>
      <button onClick={() => removeQuestion({ collectionId, questionId: question.id })}>
        Remove
      </button>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  removeQuestion: ids => dispatch(removeCollectionQuestion(ids)),
})

export default withRouter(connect(null, mapDispatchToProps)(SlideOverviewComponent))
