import React from "react"
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"
import { selectUserCollection } from "../../redux/collections/collectionsSelectors"
import SlidesOverviewContainerComponent from "../../components/edit/slidesOverviewContainer/SlidesOverviewContainerCopmonent"
import EditSlideComponent from "../../components/edit/editSlide/EditSlideComponent"
import EditSlidePropertiesComponent from "../../components/edit/editSlideProperties/EditSlidePropertiesComponent"
import CollectionSettingCardComponent from "../../components/edit/collectionSettingCard/CollectionSettingCardComponent"

import "./editPage.scss"

const EditPage = ({ collection }) => {
  if (!collection) return <div>This collection was not found!</div>

  return (
    <div className="create-page">
      <div className="create-page-container">
        <SlidesOverviewContainerComponent />
        <EditSlideComponent />
        <EditSlidePropertiesComponent />
        <CollectionSettingCardComponent />
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    collection: selectUserCollection(ownProps.match.params.collectionId)(state),
  }
}

export default withRouter(connect(mapStateToProps)(EditPage))
