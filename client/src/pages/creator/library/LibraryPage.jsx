import React from "react"
import PreviewCollectionsComponent from "../../../components/previewCollections/PreviewCollectionsComponent"

import "./libraryPage.scss"

const LibraryPage = ({ history }) => {
  const handleClickNewCollection = () => {
    history.push("/")
  }

  return (
    <div className="library-page">
      <div className="library-page-header">
        <span className="title">Your Library</span>
        <button className="button button-new" onClick={handleClickNewCollection}>
          New
        </button>
      </div>
      <PreviewCollectionsComponent />
    </div>
  )
}

export default LibraryPage
