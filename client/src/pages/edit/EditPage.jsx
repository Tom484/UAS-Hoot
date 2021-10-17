import React from "react"
import { connect } from "react-redux"
import EditQuestionComponent from "../../components/edit/editQuestion/EditQuestionComponent"

import "./editPage.scss"

const EditPage = ({ match, collections }) => {
  const collection = collections[match.params.id]
  const questions = Object.values(collection.questions)[0]

  return (
    <div className="create-page">
      <div className="create-page-container">
        <div className="container-1"></div>
        <EditQuestionComponent questions={questions} collectionId={match.params.id} />
        <div className="container-3"></div>
      </div>
    </div>
  )
}

const mapStateToProps = ({ collections }) => ({
  collections: collections.userCollections,
})

export default connect(mapStateToProps)(EditPage)
