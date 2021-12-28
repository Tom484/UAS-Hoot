import React from "react"
import { Redirect, Switch } from "react-router-dom"
import PrivateRoute from "../../components/components/privateRoute/PrivateRoute"
import ReportsPage from "../../pages/reports/ReportsPage"
import { AUTH_ROUTES } from "../auth/AuthRoutes"
import { NOT_FOUND_ROUTES } from "../notFound/NotFoundRoutes"

export const REPORTS_ROUTERS = {
  DEFAULT: "/reports",
  INITIAL: "/reports",
}

const ReportRoutes = () => {
  return (
    <div>
      <Switch>
        <PrivateRoute
          exact
          onlyLogged={true}
          redirect={AUTH_ROUTES.SIGN_IN}
          path={REPORTS_ROUTERS.DEFAULT}
          component={ReportsPage}
        />
        <Redirect to={NOT_FOUND_ROUTES.NOT_FOUND} />
      </Switch>
    </div>
  )
}

export default ReportRoutes
