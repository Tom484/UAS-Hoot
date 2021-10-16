import React from "react"
import { format } from "date-fns"

import "./previewCollectionComponent.scss"

const PreviewCollectionComponent = ({ collection: { name, lastChangedAt, creatorName } }) => {
  return (
    <div className="preview-collection-component">
      <div className="preview-collection-component-container">
        <div className="title">{name}</div>
        <div className="property-container">
          <span className="side-1">
            <span className="createdAt">{creatorName}</span>
          </span>
          <div className="side-2">
            <span className="creator-name">{format(new Date(lastChangedAt), "LLLL dd yyyy")}</span>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PreviewCollectionComponent
