import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { selectUserAnswersArray } from "../../../redux/collections/collectionsSelectors"
import SelectAnswerComponent from "../selectAnswer/SelectAnswerComponent"

import "./selectAnswersComponent.scss"

const SelectAnswersComponent = ({ answersArray }) => {
  return (
    <div className="select-answers-component">
      {answersArray.map((answer, i) => (
        <SelectAnswerComponent key={i} order={i + 1} answer={answer} />
      ))}
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const { collectionId, currentQuestion } = ownProps.match.params
  return {
    answersArray: selectUserAnswersArray(collectionId, currentQuestion)(state),
  }
}

export default withRouter(connect(mapStateToProps)(SelectAnswersComponent))
