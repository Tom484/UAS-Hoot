import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import EditButtonTypes from "./editButtonTypes"
import {
  createCollectionStart,
  deleteCollectionStart,
} from "../../../redux/collections/collectionsActions"
import { toggleFavoriteCollectionStart } from "../../../redux/user/userActions"

const EditButton = ({
  type,
  collectionId,
  history,
  children,
  match,
  label,
  className,
  deleteCollection,
  createCollection,
  toggleFavoriteCollection,
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
      case EditButtonTypes.TOGGLE_FAVORITE_COLLECTION.id:
        toggleFavoriteCollectionHandler()
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

  const toggleFavoriteCollectionHandler = () => {
    toggleFavoriteCollection({ collectionId })
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
  toggleFavoriteCollection: id => dispatch(toggleFavoriteCollectionStart(id)),
})

export default withRouter(connect(null, mapDispatchToProps)(EditButton))
