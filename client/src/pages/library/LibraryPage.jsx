import React from "react"
import PreviewCollections from "../../components/library/previewCollections/PreviewCollections"
import "./libraryPage.scss"
import EditButtonComponent from "../../components/edit/editButton/EditButtonComponent"

const LibraryPage = () => {
  return (
    <div className="library-page">
      <div className="library-page-header">
        <h2>Your Library</h2>
        <EditButtonComponent type="CREATE_COLLECTION" />
      </div>
      <PreviewCollections />
    </div>
  )
}

export default LibraryPage
