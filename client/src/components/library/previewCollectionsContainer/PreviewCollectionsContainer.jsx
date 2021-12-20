import React from "react"
import { withRouter } from "react-router-dom"
import { CustomButtonActivation } from "../../components/customButton/CustomButton"
import PreviewCollections from "../previewCollections/PreviewCollections"

import "./previewCollectionsContainer.scss"

const PreviewCollectionsContainer = ({ history, match }) => {
  const { sortId } = match.params

  return (
    <div className="preview-collections-container">
      <div className="buttons-sort-bar">
        <CustomButtonActivation
          activate={sortId === "recent"}
          onClick={() => history.push("/library/recent")}
        >
          Recent
        </CustomButtonActivation>
        <CustomButtonActivation
          activate={sortId === "created"}
          onClick={() => history.push("/library/created")}
        >
          Created
        </CustomButtonActivation>
        <CustomButtonActivation
          activate={sortId === "favorites"}
          onClick={() => history.push("/library/favorites")}
        >
          Favorites
        </CustomButtonActivation>
      </div>
      <PreviewCollections />
    </div>
  )
}

export default withRouter(PreviewCollectionsContainer)
