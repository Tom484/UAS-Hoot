import React from "react"
import { format } from "date-fns"
import EditButtonComponent from "../../components/editButton/EditButtonComponent"
import { ICONEditBroken, ICONStarBroken, ICONTrashBroken } from "../../../icons/Icons"
import "./previewCollection.scss"

const PreviewCollection = ({ collection: { name, changedAt, author, id } }) => {
  return (
    <div className="preview-collection">
      <div className="preview-collection-container">
        <div className="title-container">
          <h2>{name}</h2>
          <ICONStarBroken className="icon-star svg-icon-medium-size svg-icon-default-size svg-icon-pointer" />
        </div>
        <div className="property-container">
          <span className="side-container-1">
            <span className="author">{author}</span>
          </span>
          <div className="side-container-2">
            <div className="created-at">{format(new Date(changedAt), "LLLL dd yyyy")}</div>
            <EditButtonComponent type="LINK_TO_EDIT" collectionId={id}>
              <ICONEditBroken className="icon svg-icon-default-color svg-icon-pointer" />
            </EditButtonComponent>
            <EditButtonComponent type="DELETE_COLLECTION" collectionId={id}>
              <ICONTrashBroken className="icon svg-icon-default-color svg-icon-pointer" />
            </EditButtonComponent>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PreviewCollection
