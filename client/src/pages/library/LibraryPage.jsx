import React from "react"
import PreviewCollectionsComponent from "../../components/previewCollections/PreviewCollectionsComponent"
import "./libraryPage.scss"
import EditButtonComponent from "../../components/edit/editButton/EditButtonComponent"

const LibraryPage = () => {
  return (
    <div className="library-page">
      <div className="library-page-header">
        <h2>Your Library</h2>
        <EditButtonComponent type="CREATE_COLLECTION" />
      </div>
      <PreviewCollectionsComponent />
    </div>
  )
}

export default LibraryPage
