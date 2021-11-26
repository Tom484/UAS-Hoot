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

import "./previewCollection.scss"

const PreviewCollection = ({ collection: { name, changedAt, author, id }, currentUser }) => {
  const favorites = currentUser?.favorites || []

  const isFavorite = favorites.includes(id)

  return (
    <div className="preview-collection">
      <EditButton type="TOGGLE_FAVORITE_COLLECTION" collectionId={id}>
        {isFavorite ? (
          <ICONStarBold className="icon-star cursor-pointer active" />
        ) : (
          <ICONStarOutline className="icon-star cursor-pointer" />
        )}
      </EditButton>
      <div className="preview-collection-container">
        <div className="title-container">
          <h2>{name}</h2>
        </div>
        <div className="property-container">
          <span className="side-container-1">
            <span className="author">{author}</span>
          </span>
          <div className="side-container-2">
            <div className="date-side">
              <div className="created-at">{format(new Date(changedAt), "LLLL dd yyyy")}</div>
            </div>
            <div className="icon-side">
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
    </div>
  )
}

const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state),
})

export default connect(mapStateToProps)(PreviewCollection)
