import React from "react"
import { Redirect, Switch } from "react-router-dom"
import PrivateRoute from "../../components/auth/privateRoute/PrivateRoute"
import ReportsPage from "../../pages/reports/reports/ReportsPage"
import ROUTES from "../routes"

const ReportRoutes = () => {
  return (
    <div>
      <Switch>
        <PrivateRoute
          exact
          onlyLogged={true}
          redirect={ROUTES.AUTH.SIGN_IN}
          path={ROUTES.REPORTS.DEFAULT}
          component={ReportsPage}
        />
        <Redirect to={ROUTES.NOT_FOUND.NOT_FOUND} />
      </Switch>
    </div>
  )
}

export default ReportRoutes
