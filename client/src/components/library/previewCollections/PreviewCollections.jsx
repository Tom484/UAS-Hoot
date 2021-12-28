import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { selectUserCollectionsArraySorted } from "../../../redux/collections/collectionsSelectors"
import PreviewCollection from "../previewCollection/PreviewCollection"

import "./previewCollections.scss"

const PreviewCollections = ({ collectionArray }) => {
  if (!collectionArray) return <div>Something went wrong</div>

  return (
    <div className="preview-collections">
      {collectionArray.map(collection => (
        <PreviewCollection key={collection.id} collection={collection} />
      ))}
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  // const { sortId } = ownProps.match.params
  const sortId = "recent"
  return {
    collectionArray: selectUserCollectionsArraySorted(sortId)(state),
  }
}

export default withRouter(connect(mapStateToProps)(PreviewCollections))
