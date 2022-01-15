import React from "react"
import { Redirect, Switch } from "react-router-dom"
import PrivateRoute from "../../components/auth/privateRoute/PrivateRoute"
import DiscoverPage from "../../pages/discover/discover/DiscoverPage"
import ROUTES from "../routes"

const DiscoverRoutes = () => {
  return (
    <div>
      <Switch>
        <PrivateRoute
          exact
          onlyLogged={true}
          redirect={ROUTES.AUTH.SIGN_IN}
          path={ROUTES.DISCOVER.DEFAULT}
          component={DiscoverPage}
        />
        <Redirect to={ROUTES.NOT_FOUND.NOT_FOUND} />
      </Switch>
    </div>
  )
}

export default DiscoverRoutes
