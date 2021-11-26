import React from "react"
import PreviewCollectionsContainer from "../../components/library/previewCollectionsContainer/PreviewCollectionsContainer"
import EditButton from "../../components/components/editButton/EditButton"

import "./libraryPage.scss"

const LibraryPage = () => {
  return (
    <div className="library-page">
      <div className="library-page-container">
        <div className="library-page-header">
          <h2 className="library-page-name">Your Library</h2>
          <EditButton type="CREATE_COLLECTION">
            <span className="btn-basic button-create">Create</span>
          </EditButton>
        </div>
        <PreviewCollectionsContainer />
      </div>
    </div>
  )
}

export default LibraryPage
