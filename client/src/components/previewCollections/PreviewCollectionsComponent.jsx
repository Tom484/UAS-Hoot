import React from "react"
import { connect } from "react-redux"
import PreviewCollectionComponent from "../previewCollection/PreviewCollectionComponent"
import "./previewCollectionsComponent.scss"

const PreviewCollectionsComponent = ({ userCollections }) => {
  const arrayUserCollections = Object.values(userCollections)
  return (
    <div>
      {arrayUserCollections?.map(collection => (
        <PreviewCollectionComponent key={collection.id} collection={collection} />
      ))}
    </div>
  )
}

const mapStateToProps = ({ userCollections }) => ({
  userCollections: userCollections.collections,
})

export default connect(mapStateToProps)(PreviewCollectionsComponent)
