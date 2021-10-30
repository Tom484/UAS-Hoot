import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import EditButtonTypes from "./editButtonTypes"
import {
  createCollectionStart,
  deleteCollectionStart,
} from "../../../redux/collections/collectionsActions"

const EditButtonComponent = ({
  type,
  collectionId,
  history,
  children,
  match,
  label,
  className,
  deleteCollection,
  createCollection,
}) => {
  collectionId = collectionId || match.params.collectionId

  const clickHandler = () => {
    switch (type) {
      case EditButtonTypes.CREATE_COLLECTION.id:
        createCollectionHandler()
        break
      case EditButtonTypes.DELETE_COLLECTION.id:
        deleteCollectionHandler()
        break
      case EditButtonTypes.LINK_TO_EDIT.id:
        linkToEditHandler()
        break
      default:
        console.log("Error! Enter correct type name!")
    }
  }

  const createCollectionHandler = () => {
    createCollection({ history })
  }

  const deleteCollectionHandler = () => {
    deleteCollection({ collectionId })
  }

  const linkToEditHandler = () => {
    history.push(`/editor/${collectionId}`)
  }

  if (children) return <span onClick={clickHandler}>{children}</span>
  return (
    <button className={"button button-basic " + className} onClick={clickHandler}>
      {label ? label : EditButtonTypes[type]?.label || "Enter correct type"}
    </button>
  )
}

const mapDispatchToProps = dispatch => ({
  deleteCollection: id => dispatch(deleteCollectionStart(id)),
  createCollection: id => dispatch(createCollectionStart(id)),
})

export default withRouter(connect(null, mapDispatchToProps)(EditButtonComponent))
