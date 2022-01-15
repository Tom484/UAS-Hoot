import React from "react"
import { Redirect, Route, Switch } from "react-router-dom"
import NotFoundPage from "../../pages/notFound/notFound/NotFoundPage"
import ROUTES from "../routes"

const NotFoundRoutes = () => {
  return (
    <div>
      <Switch>
        <Route exact path={ROUTES.NOT_FOUND.NOT_FOUND} component={NotFoundPage} />
        <Redirect to={ROUTES.NOT_FOUND.NOT_FOUND} />
      </Switch>
    </div>
  )
}

export default NotFoundRoutes
