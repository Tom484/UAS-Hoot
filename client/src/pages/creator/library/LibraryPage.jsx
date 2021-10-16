import React from "react"
import PreviewCollectionsComponent from "../../../components/previewCollections/PreviewCollectionsComponent"

import "./libraryPage.scss"

const LibraryPage = () => {
  return (
    <div className="library-page">
      Library
      <PreviewCollectionsComponent />
    </div>
  )
}

export default LibraryPage
