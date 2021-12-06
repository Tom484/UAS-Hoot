import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { selectUserCollection } from "../../redux/collections/collectionsSelectors"
import HostButton from "../../components/event/eventButton/EventButton"

import "./eventCreatePage.scss"

const EventCreatePage = ({ collection }) => {
  if (!collection) return <div>This collection was not found</div>
  return (
    <div className="event-create-page">
      <div className="event-create-page-container">
        <h2 className="title">Create Event</h2>
        <h4 className="collection-name">{collection.name}</h4>
        <HostButton type="CREATE_EVENT" collectionId={collection.id} />
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectUserCollection(ownProps.match.params.collectionId)(state),
})

export default withRouter(connect(mapStateToProps)(EventCreatePage))
