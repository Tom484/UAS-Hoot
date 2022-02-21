import React from "react"
import { format } from "date-fns"
import { selectCurrentUser } from "../../../redux/user/userSelectors"
import { connect } from "react-redux"
import { CustomTextMedium, CustomTextSmall } from "../../custom/customText/CustomText"
import { setContextMenuItems } from "../../../redux/localSetting/localSettingActions"
import { CONTEXT_MENU_TYPES } from "../../components/contextMenu/ContextMenu"

import "./previewCollection.scss"

const PreviewCollection = ({
  collection: { name, changedAt, author, id, isValid },
  currentUser,
  setContextMenuItems,
}) => {
  const favorites = currentUser?.favorites || []
  const isFavorite = favorites.includes(id)

  return (
    <div
      className={`preview-collection ${isFavorite ? "favorite" : ""}`}
      onContextMenu={() =>
        setContextMenuItems({ type: CONTEXT_MENU_TYPES.PREVIEW_COLLECTION, data: { id } })
      }
    >
      <div className="preview-collection-container">
        <CustomTextMedium>
          <span className="fw-600">{name}</span>
        </CustomTextMedium>
        <CustomTextSmall>{isValid ? "Ready to play" : "Not ready to play"}</CustomTextSmall>
        <CustomTextSmall className="collection-highlight">
          {author} | {format(new Date(changedAt), "LLLL dd yyyy")}
        </CustomTextSmall>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state),
})

const mapDispatchToProps = dispatch => ({
  setContextMenuItems: items => dispatch(setContextMenuItems(items)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PreviewCollection)
