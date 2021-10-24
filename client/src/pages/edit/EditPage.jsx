import React from "react"
import EditSlidePropertiesComponent from "../../components/edit/editSlideProperties/EditSlidePropertiesComponent"
import EditSlideQuestionComponent from "../../components/edit/editSlideQuestion/EditSlideQuestionComponent"
import EditSlidesComponent from "../../components/edit/editSlides/EditSlidesComponent"
import "./editPage.scss"
import EditCollection from "../../components/edit/editCollection/EditCollection"

const EditPage = () => {
  return (
    <div className="create-page">
      <div className="create-page-container">
        <EditSlidesComponent />
        <EditSlideQuestionComponent />
        <EditSlidePropertiesComponent />
        <EditCollection />
      </div>
    </div>
  )
}

export default EditPage
