import React from "react"
import PreviewCollectionsContainer from "../../components/library/previewCollectionsContainer/PreviewCollectionsContainer"
import "./libraryPage.scss"
import EditButtonComponent from "../../components/components/editButton/EditButtonComponent"

const LibraryPage = () => {
  return (
    <div className="library-page">
      <div className="library-page-container">
        <div className="library-page-header">
          <h2>Your Library</h2>
          <EditButtonComponent type="CREATE_COLLECTION" />
        </div>
        <PreviewCollectionsContainer />
      </div>
    </div>
  )
}

export default LibraryPage
