import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { editCollection } from "../../../redux/collections/collectionsActions"

import "./collectionSettingCartToggleButtonComponent.scss"

const CollectionSettingCartToggleButtonComponent = ({
  collectionId,
  match,
  editCollection,
  children,
}) => {
  collectionId = collectionId || match.params.collectionId

  const clickHandler = () => {
    editCollection({
      collectionId,
      properties: {
        collectionSettingCardVisible: true,
      },
    })
  }

  if (children) return <span onClick={clickHandler}>{children}</span>
  return <button onClick={clickHandler}>Collection Setting</button>
}

const mapDispatchToProps = dispatch => ({
  editCollection: id => dispatch(editCollection(id)),
})

export default withRouter(
  connect(null, mapDispatchToProps)(CollectionSettingCartToggleButtonComponent)
)
