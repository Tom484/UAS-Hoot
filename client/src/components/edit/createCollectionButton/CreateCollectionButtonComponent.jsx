import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { createCollection } from "../../../redux/collections/collectionsActions"

import "./createCollectionButtonComponent.scss"
import uuid from "react-uuid"

const CreateCollectionButtonComponent = ({ createCollection, history }) => {
  const clickHandler = () => {
    const collectionId = uuid()
    createCollection({ collectionId })
    history.push(`/edit/${collectionId}/1`)

    console.log("click")
  }

  return <button onClick={clickHandler}>New</button>
}

const mapDispatchToProps = dispatch => ({
  createCollection: properties => dispatch(createCollection(properties)),
})

export default withRouter(connect(null, mapDispatchToProps)(CreateCollectionButtonComponent))
