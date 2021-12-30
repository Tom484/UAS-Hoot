import React, { useEffect } from "react"
import { connect } from "react-redux"
import EventNavbar from "../../../components/event/eventNavbar/EventNavbar"
import EventSlide from "../../../components/event/eventSlide/EventSlide"
import { firestore } from "../../../firebase/firebaseUtils"
import { updateAnswers } from "../../../redux/eventAnswers/eventAnswersActions"
import { selectEventDataConnect } from "../../../redux/eventData/eventDataSelectors"
import { updatePlayersLocal } from "../../../redux/eventPlayers/eventPlayersActions"

import "./eventPage.scss"

const EventPage = ({ eventDataConnect, updatePlayers, updateAnswers }) => {
  useEffect(() => {
    if (!eventDataConnect) return
    const unsubscribe = firestore
      .collection(`events/${eventDataConnect.enterCode}/players`)
      .onSnapshot(snapshot => {
        const players = snapshot.docs.map(doc => doc.data())
        updatePlayers(players)
      })
    return () => unsubscribe()
    // eslint-disable-next-line
  }, [eventDataConnect])

  useEffect(() => {
    const unsubscribe = firestore
      .collection(`events/${eventDataConnect.enterCode}/answers`)
      .onSnapshot(snapshot => {
        const answers = snapshot.docs.map(doc => doc.data())
        updateAnswers(answers)
      })
    return () => unsubscribe()
    // eslint-disable-next-line
  }, [eventDataConnect])

  return (
    <div style={{ paddingTop: "60px" }}>
      <EventNavbar />
      <EventSlide />
    </div>
  )
}

const mapStateToProps = state => ({
  eventDataConnect: selectEventDataConnect(state),
})

const mapDispatchToProps = dispatch => ({
  updatePlayers: players => dispatch(updatePlayersLocal(players)),
  updateAnswers: answers => dispatch(updateAnswers(answers)),
})

export default connect(mapStateToProps, mapDispatchToProps)(EventPage)
