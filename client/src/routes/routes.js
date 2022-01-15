const ROUTES = {
  AUTH: {
    ACCOUNT: "/auth/account",
    SIGN_IN: "/auth/sign-in",
    SIGN_UP: "/auth/sign-up",
    RESET_PASSWORD_EMAIL: "/auth/reset-password-email",
    INITIAL: "/auth",
  },
  DISCOVER: {
    DEFAULT: "/discover",
    INITIAL: "/discover",
  },
  EDITOR: {
    EDITOR: "/editor/:collectionId",
    INITIAL: "/editor",
  },
  EVENT: {
    CREATE_EVENT: "/event/:collectionId",
    EVENT: "/event",
    INITIAL: "/event",
  },
  HOME: {
    HOME: "/",
    INITIAL: "/",
  },
  LIBRARY: {
    RECENT: "/library/recent",
    CREATED: "/library/created",
    FAVORITES: "/library/favorites",
    INITIAL: "/library",
  },
  NOT_FOUND: {
    NOT_FOUND: "/not-found",
    INITIAL: "/not-found",
  },
  REPORTS: {
    DEFAULT: "/reports",
    INITIAL: "/reports",
  },
}

export default ROUTES
