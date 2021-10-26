import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { selectUserOptionsArray } from "../../../redux/collections/collectionsSelectors"
import EditSlideQuizOptionComponent from "../editSlideQuizOption/EditSlideQuizOptionComponent"

import "./editSlideQuizOptionsComponent.scss"

const EditSlideQuizOptionsComponent = ({ optionsArray }) => {
  return (
    <div className="select-answers-component">
      {optionsArray.map((option, i) => (
        <EditSlideQuizOptionComponent key={i} order={i + 1} option={option} />
      ))}
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const { collectionId } = ownProps.match.params
  return {
    optionsArray: selectUserOptionsArray(collectionId)(state),
  }
}

export default withRouter(connect(mapStateToProps)(EditSlideQuizOptionsComponent))
