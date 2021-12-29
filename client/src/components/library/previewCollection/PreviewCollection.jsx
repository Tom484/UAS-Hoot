import React from "react"
import { format } from "date-fns"
import { selectCurrentUser } from "../../../redux/user/userSelectors"
import { connect } from "react-redux"
import {
  CustomTextInfoBgMedium,
  CustomTextMedium,
  CustomTextSmall,
} from "../../components/customText/CustomText"

import "./previewCollection.scss"
import { setContextMenuItems } from "../../../redux/localSetting/localSettingActions"
import { CONTEXT_MENU_TYPES } from "../../components/ContextMenu/ContextMenu"

const PreviewCollection = ({
  collection: { name, changedAt, author, id },
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
          <div className="fw-600">{name}</div>
        </CustomTextMedium>
        <CustomTextSmall>Ready to play</CustomTextSmall>
        <CustomTextInfoBgMedium style={{ color: "var(--color-text-3)", fontWeight: "500" }}>
          {author} | {format(new Date(changedAt), "LLLL dd yyyy")}
        </CustomTextInfoBgMedium>
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
