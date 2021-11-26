import React from "react"
import { withRouter } from "react-router-dom"
import PreviewCollections from "../previewCollections/PreviewCollections"

import "./previewCollectionsContainer.scss"

const PreviewCollectionsContainer = ({ history, match }) => {
  const { sortId } = match.params

  return (
    <div className="preview-collections-container">
      <div className="buttons-sort-bar">
        <button
          className={`btn-basic button-sort ${sortId === "recent" ? "active" : ""}`}
          onClick={() => history.push("/library/recent")}
        >
          Recent
        </button>
        <button
          className={`btn-basic button-sort ${sortId === "created" ? "active" : ""}`}
          onClick={() => history.push("/library/created")}
        >
          Created
        </button>
        <button
          className={`btn-basic button-sort ${sortId === "favorites" ? "active" : ""}`}
          onClick={() => history.push("/library/favorites")}
        >
          Favorites
        </button>
      </div>
      <PreviewCollections />
    </div>
  )
}

export default withRouter(PreviewCollectionsContainer)
