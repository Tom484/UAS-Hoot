import React from "react"
import { connect } from "react-redux"
import { selectUserCollectionsArray } from "../../../redux/collections/collectionsSelectors"
import PreviewCollection from "../previewCollection/PreviewCollection"

import "./previewCollections.scss"

const PreviewCollections = ({ collectionArray }) => {
  return (
    <div className="preview-collections">
      {collectionArray.map(collection => (
        <PreviewCollection key={collection.id} collection={collection} />
      ))}
    </div>
  )
}

const mapStateToProps = state => ({
  collectionArray: selectUserCollectionsArray(state),
})

export default connect(mapStateToProps)(PreviewCollections)
