import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { createCollection } from "../../../redux/collections/collectionsActions"

import "./createCollectionButtonComponent.scss"
import uuid from "react-uuid"
import { selectCurrentUser } from "../../../redux/user/userSelectors"

const CreateCollectionButtonComponent = ({ createCollection, history, currentUser, children }) => {
  const clickHandler = () => {
    const collectionId = uuid()
    createCollection({ collectionId, creatorName: currentUser.displayName })
    history.push(`/edit/${collectionId}`)
  }

  if (children) return <span onClick={clickHandler}>{children}</span>
  return <button onClick={clickHandler}>New</button>
}

const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state),
})

const mapDispatchToProps = dispatch => ({
  createCollection: properties => dispatch(createCollection(properties)),
})

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CreateCollectionButtonComponent)
)
