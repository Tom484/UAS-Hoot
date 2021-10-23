import React from "react"
import EditSlidePropertiesComponent from "../../components/edit/editSlideProperties/EditSlidePropertiesComponent"
import EditSlideQuestionComponent from "../../components/edit/editSlideQuestion/EditSlideQuestionComponent"
import EditSlidesComponent from "../../components/edit/editSlides/EditSlidesComponent"
import "./editPage.scss"

const EditPage = () => {
  return (
    <div className="create-page">
      <div className="create-page-container">
        <EditSlidesComponent />
        <EditSlideQuestionComponent />
        <EditSlidePropertiesComponent />
      </div>
    </div>
  )
}

export default EditPage
