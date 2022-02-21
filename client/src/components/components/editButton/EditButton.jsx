import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import EditButtonTypes from "./editButtonTypes"
import {
  createCollectionStart,
  deleteCollectionStart,
} from "../../../redux/collections/collectionsActions"
import { toggleFavoriteCollectionStart } from "../../../redux/user/userActions"
import CustomButton from "../../custom/customButton/CustomButton"
import ROUTES from "../../../routes/routes"
import { showPopUpCard } from "../../../redux/localSetting/localSettingActions"
import { CUSTOM_POP_UP_CARD_ACTIONS } from "../../custom/customPopUpCard/CustomPopUpCard"

const EditButton = ({
  type,
  collectionId,
  history,
  children,
  match,
  label,
  deleteCollection,
  createCollection,
  toggleFavoriteCollection,
  showPopUpCard,
}) => {
  collectionId = collectionId || match.params.collectionId

  const clickHandler = () => {
    switch (type) {
      case EditButtonTypes.CREATE_COLLECTION.id:
        createCollection({ history })
        break
      case EditButtonTypes.DELETE_COLLECTION.id:
        showPopUpCard({ type: CUSTOM_POP_UP_CARD_ACTIONS.DELETE_COLLECTION, collectionId })
        break
      case EditButtonTypes.LINK_TO_EDIT.id:
        history.push(`${ROUTES.EDITOR.INITIAL}/${collectionId}`)
        break
      case EditButtonTypes.TOGGLE_FAVORITE_COLLECTION.id:
        toggleFavoriteCollection({ collectionId })
        break
      case EditButtonTypes.LINK_TO_CREATE_EVENT.id:
        history.push(`${ROUTES.EVENT.INITIAL}/${collectionId}`)
        break
      default:
        console.log("Error! Enter correct type name!")
    }
  }

  if (children) return <span onClick={clickHandler}>{children}</span>

  return (
    <CustomButton style={{ fontSize: "16px", width: "auto" }} onClick={clickHandler}>
      {label ? label : EditButtonTypes[type]?.label || "Enter correct type"}
    </CustomButton>
  )
}

const mapDispatchToProps = dispatch => ({
  deleteCollection: id => dispatch(deleteCollectionStart(id)),
  createCollection: id => dispatch(createCollectionStart(id)),
  toggleFavoriteCollection: id => dispatch(toggleFavoriteCollectionStart(id)),
  showPopUpCard: action => dispatch(showPopUpCard(action)),
})

export default withRouter(connect(null, mapDispatchToProps)(EditButton))
