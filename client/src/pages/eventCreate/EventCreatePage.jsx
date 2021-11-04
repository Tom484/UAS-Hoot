import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { selectUserCollection } from "../../redux/collections/collectionsSelectors"
import EventHostButton from "../../components/eventHost/eventHostButton/EventHostButton"

import "./eventCreatePage.scss"

const EventCreatePage = ({ collection }) => {
  if (!collection) return <div>This collection was not found</div>

  return (
    <div className="event-create-page">
      <div className="event-create-page-container">
        <h2>Create Event</h2>
        <h4>Name {collection.name}</h4>
        <button>Start Game</button>
        <EventHostButton type="CREATE_EVENT" collectionId={collection.id} />
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectUserCollection(ownProps.match.params.collectionId)(state),
})

export default withRouter(connect(mapStateToProps)(EventCreatePage))