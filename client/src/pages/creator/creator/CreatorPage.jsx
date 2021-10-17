import React from "react"
import QuestionComponent from "../../../components/creator/question/QuestionComponent"
import { connect } from "react-redux"

import "./creatorPage.scss"

const CreatePage = ({ match, userCollections }) => {
  const collection = userCollections[match.params.id]

  return (
    <div className="create-page">
      <div className="create-page-container">
        <div className="container-1"></div>
        <QuestionComponent collection={collection} />
        <div className="container-3"></div>
      </div>
    </div>
  )
}

const mapStateToProps = ({ collections }) => ({
  userCollections: collections.userCollections,
})

export default connect(mapStateToProps)(CreatePage)
