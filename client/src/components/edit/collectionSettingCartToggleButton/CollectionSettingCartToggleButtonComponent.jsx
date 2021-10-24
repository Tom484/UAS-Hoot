import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { editCollection } from "../../../redux/collections/collectionsActions"

import "./collectionSettingCartToggleButtonComponent.scss"

const CollectionSettingCartToggleButtonComponent = ({ collectionId, match, editCollection }) => {
  collectionId = collectionId || match.params.collectionId
  return (
    <button
      onClick={() =>
        editCollection({
          collectionId,
          properties: {
            collectionSettingCardVisible: true,
          },
        })
      }
    >
      Collection Setting
    </button>
  )
}

const mapDispatchToProps = dispatch => ({
  editCollection: id => dispatch(editCollection(id)),
})

export default withRouter(
  connect(null, mapDispatchToProps)(CollectionSettingCartToggleButtonComponent)
)
