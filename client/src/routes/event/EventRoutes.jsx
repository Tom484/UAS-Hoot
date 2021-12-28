import React from "react"
import { Redirect, Switch } from "react-router-dom"
import PrivateRoute from "../../components/components/privateRoute/PrivateRoute"
import EventPage from "../../pages/event/EventPage"
import EventCreatePage from "../../pages/eventCreate/EventCreatePage"
import { AUTH_ROUTES } from "../auth/AuthRoutes"
import { NOT_FOUND_ROUTES } from "../notFound/NotFoundRoutes"

export const EVENT_ROUTES = {
  CREATE_EVENT: "/event/:collectionId",
  EVENT: "/event",
}

const EventRoutes = () => {
  return (
    <div>
      <Switch>
        <PrivateRoute
          exact
          onlyLogged={true}
          redirect={AUTH_ROUTES.SIGN_IN}
          path={EVENT_ROUTES.CREATE_EVENT}
          component={EventCreatePage}
        />
        <PrivateRoute
          exact
          onlyLogged={true}
          redirect={AUTH_ROUTES.SIGN_IN}
          path={EVENT_ROUTES.EVENT}
          component={EventPage}
        />
        <Redirect to={NOT_FOUND_ROUTES.NOT_FOUND} />
      </Switch>
    </div>
  )
}

export default EventRoutes
