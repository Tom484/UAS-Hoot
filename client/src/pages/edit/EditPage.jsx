import React from "react"
import { connect } from "react-redux"
import EditQuestionComponent from "../../components/edit/editQuestion/EditQuestionComponent"
import { selectUserCollections } from "../../redux/collections/collectionsSelectors"
import "./editPage.scss"

const EditPage = ({ match, collections }) => {
  const editPageValues = {
    collection: collections[match.params.collectionId],
    collectionId: match.params.collectionId,
    questionId: Object.values(collections[match.params.collectionId].questions)[
      match.params.questionOrder - 1
    ].id,
    questionOrder: match.params.questionOrder,
    questions: collections[match.params.collectionId].questions,
    question: Object.values(collections[match.params.collectionId].questions)[
      match.params.questionOrder - 1
    ],
  }

  return (
    <div className="create-page">
      <div className="create-page-container">
        <div className="container-1"></div>
        {editPageValues && <EditQuestionComponent editPageValues={editPageValues} />}
        <div className="container-3"></div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  collections: selectUserCollections(state),
})

export default connect(mapStateToProps)(EditPage)
