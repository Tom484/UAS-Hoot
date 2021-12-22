import React, { useEffect } from "react"
import { connect } from "react-redux"
import { firestore } from "../../../firebase/firebaseUtils"
import { selectEventDataConnect } from "../../../redux/eventData/eventDataSelectors"
import { updatePlayersLocal } from "../../../redux/eventPlayers/eventPlayersActions"
import { selectCurrentUser } from "../../../redux/user/userSelectors"

const DatabasePlayersListener = ({ currentUser, eventDataConnect, updatePlayers }) => {
  useEffect(() => {
    if (!currentUser || !eventDataConnect) return
    const unsubscribe = firestore
      .collection(`events/${eventDataConnect.enterCode}/players`)
      .onSnapshot(snapshot => {
        const players = snapshot.docs.map(doc => doc.data())
        updatePlayers(players)
      })
    return () => unsubscribe()
    // eslint-disable-next-line
  }, [currentUser, eventDataConnect])

  return <></>
}

const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state),
  eventDataConnect: selectEventDataConnect(state),
})

const mapDispatchToProps = dispatch => ({
  updatePlayers: players => dispatch(updatePlayersLocal(players)),
})

export default connect(mapStateToProps, mapDispatchToProps)(DatabasePlayersListener)
