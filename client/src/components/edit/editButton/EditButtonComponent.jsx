import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import EDIT_BUTTON_TYPES from "./editButtonTypes"
import {
  createCollection,
  deleteCollection,
  editCollection,
} from "../../../redux/collections/collectionsActions"
import { selectUserCollection } from "../../../redux/collections/collectionsSelectors"
import { selectCurrentUser } from "../../../redux/user/userSelectors"
import uuid from "react-uuid"

const EditButtonComponent = ({
  type,
  collectionId,
  slideId,
  history,
  children,
  match,
  label,
  className,
  editCollection,
  collection,
  currentUser,
  createCollection,
  deleteCollection,
}) => {
  collectionId = collectionId || match.params.collectionId
  slideId = slideId || collection?.currentSlideId

  const clickHandler = () => {
    switch (type) {
      case EDIT_BUTTON_TYPES.COLLECTION_SETTING_TOGGLE_SHOW.id:
        collectionSettingToggleShowHandler()
        break
      case EDIT_BUTTON_TYPES.CREATE_COLLECTION.id:
        createCollectionHandler()
        break
      case EDIT_BUTTON_TYPES.DELETE_COLLECTION.id:
        deleteCollectionHandler()
        break
      case EDIT_BUTTON_TYPES.LINK_TO_EDIT.id:
        linkToEditHandler()
        break
      default:
        console.log("Error! Enter correct type name!")
    }
  }

  const collectionSettingToggleShowHandler = () => {
    editCollection({
      collectionId,
      properties: { collectionSettingShow: !collection.collectionSettingShow },
    })
  }

  const createCollectionHandler = () => {
    const newCollectionId = uuid()
    createCollection({
      collectionId: newCollectionId,
      properties: { author: currentUser.displayName },
    })
    history.push(`/edit/${newCollectionId}`)
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
      {label ? label : EDIT_BUTTON_TYPES[type]?.label || "Enter correct type"}
    </button>
  )
}

const mapStateToProps = (state, ownProps) => {
  const collectionId = ownProps.collectionId || ownProps.match.params.collectionId

  return {
    collection: selectUserCollection(collectionId)(state),
    currentUser: selectCurrentUser(state),
  }
}

const mapDispatchToProps = dispatch => ({
  editCollection: idAndProperties => dispatch(editCollection(idAndProperties)),
  createCollection: properties => dispatch(createCollection(properties)),
  deleteCollection: id => dispatch(deleteCollection(id)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditButtonComponent))
