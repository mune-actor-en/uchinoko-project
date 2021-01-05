// Redux
import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware,
} from 'redux'
import thunk from 'redux-thunk'
import {
  connectRouter,
  routerMiddleware,
} from 'connected-react-router'
import { createLogger } from 'redux-logger'
// Reducers
import { UsersReducer } from '../users/reducers'

const createStore = (history: any) => {
  let middleWares = [routerMiddleware(history), thunk]

  if (process.env.NODE_ENV === 'development') {
    const logger = createLogger({
      collapsed: true,
      diff: true,
    })

    middleWares.push(logger)
  }

  return reduxCreateStore(
    combineReducers({
      router: connectRouter(history),
      users: UsersReducer,
    }),
    applyMiddleware(
      ...middleWares
    ),
  )
}

export default createStore
