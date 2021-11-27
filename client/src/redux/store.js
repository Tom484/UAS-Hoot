import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import createSagaMiddleware from "redux-saga"
import logger from "redux-logger"
import { persistStore } from "redux-persist"

import rootReducer from "./rootReducer"
import rootSaga from "./rootSaga"

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware]

// if (process.env.NODE_ENV !== "production") {
//   middlewares.push(logger)
// }
middlewares.push(logger)

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)))

export const persistor = persistStore(store)

sagaMiddleware.run(rootSaga)
