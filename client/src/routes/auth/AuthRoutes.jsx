import React from "react"
import { Redirect, Switch } from "react-router-dom"
import PrivateRoute from "../../components/components/privateRoute/PrivateRoute"
import AccountPage from "../../pages/account/AccountPage"
import ResetPasswordEmailPage from "../../pages/resetPasswordEmail/ResetPasswordEmailPage"
import SignInPage from "../../pages/signIn/SignInPage"
import SignUpPage from "../../pages/signUp/SignUpPage"
import { NOT_FOUND_ROUTES } from "../notFound/NotFoundRoutes"

export const AUTH_ROUTES = {
  ACCOUNT: "/auth/account",
  SIGN_IN: "/auth/sign-in",
  SIGN_UP: "/auth/sign-up",
  RESET_PASSWORD_EMAIL: "/auth/reset-password-email",
}

const AuthRoutes = () => {
  return (
    <Switch>
      <PrivateRoute
        exact
        onlyLogged={false}
        redirect={AUTH_ROUTES.ACCOUNT}
        path={AUTH_ROUTES.SIGN_IN}
        component={SignInPage}
      />
      <PrivateRoute
        exact
        onlyLogged={false}
        redirect={AUTH_ROUTES.ACCOUNT}
        path={AUTH_ROUTES.SIGN_UP}
        component={SignUpPage}
      />
      <PrivateRoute
        exact
        onlyLogged={false}
        redirect={AUTH_ROUTES.ACCOUNT}
        path={AUTH_ROUTES.RESET_PASSWORD_EMAIL}
        component={ResetPasswordEmailPage}
      />
      <PrivateRoute
        exact
        onlyLogged={true}
        redirect={AUTH_ROUTES.SIGN_IN}
        path={AUTH_ROUTES.ACCOUNT}
        component={AccountPage}
      />
      <Redirect to={NOT_FOUND_ROUTES.NOT_FOUND} />
    </Switch>
  )
}

export default AuthRoutes
