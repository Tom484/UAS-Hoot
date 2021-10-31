import React from "react"
import { Route, Redirect } from "react-router-dom"
import { connect } from "react-redux"

const PrivateRoute = ({ currentUser, onlyLogged, redirect, ...rest }) => {
  return onlyLogged === !!currentUser ? <Route {...rest} /> : <Redirect to={redirect} />
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
})

export default connect(mapStateToProps)(PrivateRoute)
