import React from "react"
import CreateCollectionButtonComponent from "../../components/edit/createCollectionButton/CreateCollectionButtonComponent"
import PreviewCollectionsComponent from "../../components/previewCollections/PreviewCollectionsComponent"
import "./libraryPage.scss"

const LibraryPage = () => {
  return (
    <div className="library-page">
      <div className="library-page-header">
        <span className="title">Your Library</span>
        <CreateCollectionButtonComponent />
      </div>
      <PreviewCollectionsComponent />
    </div>
  )
}

export default LibraryPage
