import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { addCollectionQuestion } from "../../../redux/collections/collectionsActions"
import { selectUserQuestionsArray } from "../../../redux/collections/collectionsSelectors"
import SlideOverviewComponent from "../slideOverview/SlideOverviewComponent"

import "./slidesOverviewComponent.scss"

const SlidesOverviewComponent = ({ questionsArray, addQuestion, match }) => {
  const { collectionId } = match.params
  return (
    <div>
      <div className="slides-container">
        {questionsArray.map((question, i) => (
          <SlideOverviewComponent question={question} key={i} order={i} />
        ))}
      </div>
      <button onClick={() => addQuestion({ collectionId })}>Add question</button>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const { collectionId } = ownProps.match.params
  return {
    questionsArray: selectUserQuestionsArray(collectionId)(state),
  }
}

const mapDispatchToProps = dispatch => ({
  addQuestion: id => dispatch(addCollectionQuestion(id)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SlidesOverviewComponent))
