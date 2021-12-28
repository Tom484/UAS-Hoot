import React from "react"
import { Redirect, Route, Switch } from "react-router-dom"
import HomePage from "../../pages/home/HomePage"
import { NOT_FOUND_ROUTES } from "../notFound/NotFoundRoutes"

export const HOME_ROUTES = {
  HOME: "/",
  INITIAL: "/",
}

const HomeRoutes = () => {
  return (
    <div>
      <Switch>
        <Route exact path={HOME_ROUTES.HOME} component={HomePage} />
        <Redirect to={NOT_FOUND_ROUTES.NOT_FOUND} />
      </Switch>
    </div>
  )
}

export default HomeRoutes
