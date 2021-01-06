// React
import React, { FC } from 'react'
// Router
import { Route, Switch } from 'react-router'
// templates
import {
  PostEdit,
  SignIn,
  SignUp,
  TimeLine
} from './templates'

const Router: FC = () => {
  return (
    <Switch>
      <Route exact path='/signin' component={SignIn} />
      <Route exact path='/signup' component={SignUp} />
      <Route path='/post/edit(/:id)?' component={PostEdit} />
      <Route exact path='/timeline' component={TimeLine} />
    </Switch>
  )
}

export default Router