import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { selectUserCollection } from "../../redux/collections/collectionsSelectors"
import HostButton from "../../components/event/eventButton/EventButton"
import CustomBackground from "../../components/custom/customBackground/CustomBackground"
import CustomCard from "../../components/custom/customCard/CustomCard"
import {
  CustomTextInfoBgMedium,
  CustomTextLarge,
  CustomTextMedium,
} from "../../components/custom/customText/CustomText"

import "./eventCreatePage.scss"

const EventCreatePage = ({ collection }) => {
  if (!collection) return <div>This collection was not found</div>
  return (
    <CustomBackground>
      <CustomCard>
        <CustomTextLarge>Create Event</CustomTextLarge>
        <CustomTextMedium>
          Event name: <span className="fw-600">{collection.name}</span>
        </CustomTextMedium>
        <CustomTextInfoBgMedium>
          Create an event, share the code with your friends and get started. Enjoy the game and find
          out a lot of new information.
        </CustomTextInfoBgMedium>
        <HostButton type="CREATE_EVENT" collectionId={collection.id} />
      </CustomCard>
    </CustomBackground>
  )
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectUserCollection(ownProps.match.params.collectionId)(state),
})

export default withRouter(connect(mapStateToProps)(EventCreatePage))
