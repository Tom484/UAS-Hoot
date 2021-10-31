import React from "react"
import { format } from "date-fns"
import EditButton from "../../components/editButton/EditButton"
import { ICONEditBroken, ICONStarBold, ICONStarBroken, ICONTrashBroken } from "../../../icons/Icons"
import "./previewCollection.scss"
import { selectCurrentUser } from "../../../redux/user/userSelectors"
import { connect } from "react-redux"

const PreviewCollection = ({ collection: { name, changedAt, author, id }, currentUser }) => {
  const favorites = currentUser?.favorites || []

  const isFavorite = favorites.includes(id)

  return (
    <div className="preview-collection">
      <div className="preview-collection-container">
        <div className="title-container">
          <h2>{name}</h2>
          <EditButton type="TOGGLE_FAVORITE_COLLECTION" collectionId={id}>
            {isFavorite ? (
              <ICONStarBold className="icon-star svg-icon-medium-size svg-icon-default-size svg-icon-pointer" />
            ) : (
              <ICONStarBroken className="icon-star svg-icon-medium-size svg-icon-default-size svg-icon-pointer" />
            )}
          </EditButton>
        </div>
        <div className="property-container">
          <span className="side-container-1">
            <span className="author">{author}</span>
          </span>
          <div className="side-container-2">
            <div className="created-at">{format(new Date(changedAt), "LLLL dd yyyy")}</div>
            <EditButton type="LINK_TO_EDIT" collectionId={id}>
              <ICONEditBroken className="icon svg-icon-default-color svg-icon-pointer" />
            </EditButton>
            <EditButton type="DELETE_COLLECTION" collectionId={id}>
              <ICONTrashBroken className="icon svg-icon-default-color svg-icon-pointer" />
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
