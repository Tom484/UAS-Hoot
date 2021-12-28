import React from "react"
import { format } from "date-fns"
import EditButton from "../../components/editButton/EditButton"
import {
  ICONEditOutline,
  ICONPlayOutline,
  ICONStarBold,
  ICONStarOutline,
  ICONTrashOutline,
} from "../../../icons/Icons"
import { selectCurrentUser } from "../../../redux/user/userSelectors"
import { connect } from "react-redux"
import { CustomTextMedium } from "../../components/customText/CustomText"

import "./previewCollection.scss"

const PreviewCollection = ({ collection: { name, changedAt, author, id }, currentUser }) => {
  const favorites = currentUser?.favorites || []

  const isFavorite = favorites.includes(id)

  return (
    <div className="preview-collection">
      {/* <EditButton type="TOGGLE_FAVORITE_COLLECTION" collectionId={id}></EditButton> */}
      <div className="preview-collection-container">
        <CustomTextMedium>
          <div className="fw-600">{name}</div>
        </CustomTextMedium>
        <div className="property-container">
          <span className="side-container-1">
            {author} | {format(new Date(changedAt), "LLLL dd yyyy")}
          </span>
          <div className="side-container-2">
            <EditButton type="LINK_TO_EDIT" collectionId={id}>
              <ICONEditOutline className="icon icon-df-color cursor-pointer" />
            </EditButton>
            <EditButton type="DELETE_COLLECTION" collectionId={id}>
              <ICONTrashOutline className="icon icon-df-color cursor-pointer" />
            </EditButton>
            <EditButton type="LINK_TO_CREATE_EVENT" collectionId={id}>
              <ICONPlayOutline className="icon icon-df-color cursor-pointer" />
            </EditButton>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state),
})

export default connect(mapStateToProps)(PreviewCollection)
