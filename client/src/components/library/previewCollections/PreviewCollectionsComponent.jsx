import React from "react"
import { connect } from "react-redux"
import { selectUserCollectionsArray } from "../../../redux/collections/collectionsSelectors"
import PreviewCollectionComponent from "../previewCollection/PreviewCollectionComponent"

import "./previewCollectionsComponent.scss"

const PreviewCollectionsComponent = ({ collectionArray }) => {
  return (
    <div className="preview-collections-component">
      {collectionArray.map(collection => (
        <PreviewCollectionComponent key={collection.id} collection={collection} />
      ))}
    </div>
  )
}

const mapStateToProps = state => ({
  collectionArray: selectUserCollectionsArray(state),
})

export default connect(mapStateToProps)(PreviewCollectionsComponent)
