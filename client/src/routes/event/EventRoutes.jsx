import React from "react"
import { Redirect, Switch } from "react-router-dom"
import PrivateRoute from "../../components/auth/privateRoute/PrivateRoute"
import EventPage from "../../pages/event/event/EventPage"
import EventCreatePage from "../../pages/event/eventCreate/EventCreatePage"
import ROUTES from "../routes"

const EventRoutes = () => {
  return (
    <div>
      <Switch>
        <PrivateRoute
          exact
          onlyLogged={true}
          redirect={ROUTES.AUTH.SIGN_IN}
          path={ROUTES.EVENT.CREATE_EVENT}
          component={EventCreatePage}
        />
        <PrivateRoute
          exact
          onlyLogged={true}
          redirect={ROUTES.AUTH.SIGN_IN}
          path={ROUTES.EVENT.EVENT}
          component={EventPage}
        />
        <Redirect to={ROUTES.NOT_FOUND.NOT_FOUND} />
      </Switch>
    </div>
  )
}

export default EventRoutes
