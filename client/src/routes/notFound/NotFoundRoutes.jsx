import React from "react"
import { Redirect, Route, Switch } from "react-router-dom"
import NotFoundPage from "../../pages/notFound/notFound/NotFoundPage"

export const NOT_FOUND_ROUTES = {
  NOT_FOUND: "/not-found",
  INITIAL: "/not-found",
}

const NotFoundRoutes = () => {
  return (
    <div>
      <Switch>
        <Route exact path={NOT_FOUND_ROUTES.NOT_FOUND} component={NotFoundPage} />
        <Redirect to={NOT_FOUND_ROUTES.NOT_FOUND} />
      </Switch>
    </div>
  )
}

export default NotFoundRoutes
