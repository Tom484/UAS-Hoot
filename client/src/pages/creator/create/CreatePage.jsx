import React from "react"
import QuestionComponent from "../../../components/create/question/QuestionComponent"

import "./createPage.scss"

const CreatePage = () => {
  return (
    <div className="create-page">
      <div className="create-page-container">
        <div className="container-1"></div>
        <QuestionComponent />
        <div className="container-3"></div>
      </div>
    </div>
  )
}

export default CreatePage
