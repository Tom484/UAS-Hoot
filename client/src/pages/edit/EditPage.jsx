import React from "react"
import EditSlideQuestionComponent from "../../components/edit/editSlideQuestion/EditSlideQuestionComponent"
import "./editPage.scss"

const EditPage = () => {
  return (
    <div className="create-page">
      <div className="create-page-container">
        <div className="container-1"></div>
        <EditSlideQuestionComponent />
        <div className="container-3"></div>
      </div>
    </div>
  )
}

export default EditPage
