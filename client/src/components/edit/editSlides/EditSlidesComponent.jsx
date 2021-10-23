import React from "react"
import SlidesOverviewComponent from "../slidesOverview/SlidesOverviewComponent"

import "./editSlidesComponent.scss"

const EditSlidesComponent = () => {
  return (
    <div className="edit-slides-component">
      <div className="edit-slides-component-container">
        <SlidesOverviewComponent />
      </div>
    </div>
  )
}

export default EditSlidesComponent
