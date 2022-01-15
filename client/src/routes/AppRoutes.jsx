import React from "react"
import { Redirect, Route, Switch } from "react-router-dom"
import AuthRoutes from "./auth/AuthRoutes"
import DiscoverRoutes from "./discover/DiscoverRoutes"
import EditorRoutes from "./editor/EditorRoutes"
import EventRoutes from "./event/EventRoutes"
import HomeRoutes from "./home/HomeRoutes"
import LibraryRoutes from "./library/LibraryRoutes"
import NotFoundRoutes from "./notFound/NotFoundRoutes"
import ReportRoutes from "./reports/ReportsRoutes"
import ROUTES from "./routes"

const AppRoutes = () => {
  return (
    <Switch>
      <Route path={ROUTES.AUTH.INITIAL} component={AuthRoutes} />
      <Route path={ROUTES.LIBRARY.INITIAL} component={LibraryRoutes} />
      <Route path={ROUTES.REPORTS.INITIAL} component={ReportRoutes} />
      <Route path={ROUTES.DISCOVER.INITIAL} component={DiscoverRoutes} />
      <Route path={ROUTES.EDITOR.INITIAL} component={EditorRoutes} />
      <Route path={ROUTES.EVENT.INITIAL} component={EventRoutes} />
      <Route path={ROUTES.NOT_FOUND.INITIAL} component={NotFoundRoutes} />
      <Route exact path={ROUTES.HOME.INITIAL} component={HomeRoutes} />
      <Redirect to={ROUTES.NOT_FOUND.INITIAL} />
    </Switch>
  )
}

export default AppRoutes
