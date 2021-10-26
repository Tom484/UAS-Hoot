import React from "react"
import { format } from "date-fns"

import "./previewCollectionComponent.scss"
import EditButtonComponent from "../edit/editButton/EditButtonComponent"

const PreviewCollectionComponent = ({ collection: { name, changedAt, author, id } }) => {
  return (
    <div className="preview-collection-component">
      <div className="preview-collection-component-container">
        <div className="title">{name}</div>
        <div className="property-container">
          <span className="side-container-1">
            <span className="author">{author}</span>
          </span>
          <div className="side-container-2">
            <span className="created-at">{format(new Date(changedAt), "LLLL dd yyyy")}</span>
            <EditButtonComponent type="LINK_TO_EDIT" collectionId={id} />
            <EditButtonComponent type="DELETE_COLLECTION" collectionId={id} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PreviewCollectionComponent
