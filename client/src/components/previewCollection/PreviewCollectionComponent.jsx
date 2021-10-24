import React from "react"
import { format } from "date-fns"
import { useHistory } from "react-router"

import "./previewCollectionComponent.scss"
import { removeCollection } from "../../redux/collections/collectionsActions"
import { connect } from "react-redux"

const PreviewCollectionComponent = ({
  collection: { name, lastChangedAt, creatorName, id },
  removeCollection,
}) => {
  const history = useHistory()
  return (
    <div className="preview-collection-component">
      <div className="preview-collection-component-container">
        <div className="title">{name}</div>
        <div className="property-container">
          <span className="side-container-1">
            <span className="createdAt">{creatorName}</span>
          </span>
          <div className="side-container-2">
            <span className="creator-name">{format(new Date(lastChangedAt), "LLLL dd yyyy")}</span>
            <button onClick={() => history.push(`/edit/${id}/1`)} className="button">
              Edit
            </button>
            <button className="button" onClick={() => removeCollection({ collectionId: id })}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  removeCollection: id => dispatch(removeCollection(id)),
})

export default connect(null, mapDispatchToProps)(PreviewCollectionComponent)
