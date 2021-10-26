import React from "react"
import { connect } from "react-redux"
import { deleteCollection } from "../../../redux/collections/collectionsActions"

import "./deleteCollectionButtonComponent.scss"

const DeleteCollectionButtonComponent = ({ collectionId, deleteCollection, children }) => {
  const clickHandler = () => {
    deleteCollection({ collectionId })
  }

  if (children) return <span onClick={clickHandler}>{children}</span>
  return (
    <button className="button button-basic" onClick={clickHandler}>
      Delete
    </button>
  )
}

const mapDispatchToProps = dispatch => ({
  deleteCollection: id => dispatch(deleteCollection(id)),
})

export default connect(null, mapDispatchToProps)(DeleteCollectionButtonComponent)
