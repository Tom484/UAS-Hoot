import React from "react"

import "./editSlideComponent.scss"

import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { selectUserCollection } from "../../../redux/collections/collectionsSelectors"
import EditSlideQuestionComponent from "../editSlideQuestion/EditSlideQuestionComponent"
import EditSlideQuizOptionsComponent from "../editSlideQuizOptions/EditSlideQuizOptionsComponent"

const EditSlideComponent = ({ collection }) => {
  return (
    <div className="edit-slide-component">
      <h2 className="project-name">{collection.name}</h2>
      <EditSlideQuestionComponent />
      <EditSlideQuizOptionsComponent />
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const { collectionId } = ownProps.match.params
  return {
    collection: selectUserCollection(collectionId)(state),
  }
}

export default withRouter(connect(mapStateToProps)(EditSlideComponent))
