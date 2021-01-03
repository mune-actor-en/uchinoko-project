// Redux
import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware,
} from 'redux'
import thunk from 'redux-thunk'
// Router
import {
  connectRouter,
  routerMiddleware,
} from 'connected-react-router'
// Reducers
import { UsersReducer } from '../users/reducers'

const createStore = (history: any) => {
  let middleWares = [routerMiddleware(history), thunk]

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
