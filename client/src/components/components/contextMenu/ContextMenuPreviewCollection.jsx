import React from "react"
import { connect, useSelector } from "react-redux"
import { selectUserCollection } from "../../../redux/collections/collectionsSelectors"
import { selectLocalSettingContextMenuItems } from "../../../redux/localSetting/localSettingSelectors"
import { selectCurrentUser } from "../../../redux/user/userSelectors"
import EditButton from "../editButton/EditButton"

const ContextMenuPreviewCollection = ({ contextMenuItems, currentUser }) => {
  const id = contextMenuItems.data.id
  const favorites = currentUser?.favorites || []
  const isFavorite = favorites.includes(id)
  const collection = useSelector(selectUserCollection(id))

  return (
    <div className="context-menu-items">
      <EditButton type="LINK_TO_EDIT" collectionId={id}>
        <div className="context-menu-item">Edit</div>
      </EditButton>
      {collection.isValid && (
        <EditButton type="LINK_TO_CREATE_EVENT" collectionId={id}>
          <div className="context-menu-item">Play</div>
        </EditButton>
      )}
      <EditButton type="TOGGLE_FAVORITE_COLLECTION" collectionId={id}>
        <div className="context-menu-item">{isFavorite ? "Unfavorite" : "Favorite"}</div>
      </EditButton>
      <EditButton type="DELETE_COLLECTION" collectionId={id}>
        <div className="context-menu-item">Delete</div>
      </EditButton>
    </div>
  )
}

const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state),
  contextMenuItems: selectLocalSettingContextMenuItems(state),
})

export default connect(mapStateToProps)(ContextMenuPreviewCollection)
