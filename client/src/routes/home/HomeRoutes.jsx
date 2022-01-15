import React from "react"
import { Redirect, Route, Switch } from "react-router-dom"
import HomePage from "../../pages/home/home/HomePage"
import ROUTES from "../routes"

const HomeRoutes = () => {
  return (
    <div>
      <Switch>
        <Route exact path={ROUTES.HOME.HOME} component={HomePage} />
        <Redirect to={ROUTES.NOT_FOUND.NOT_FOUND} />
      </Switch>
    </div>
  )
}

export default HomeRoutes
