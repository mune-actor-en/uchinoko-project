// React
import React, { FC } from 'react'
// Router
import { Route, Switch } from 'react-router'
// templates
import {
  PostEdit,
  Profile,
  SignIn,
  SignUp,
} from './templates'

const Router: FC = () => {
  return (
    <Switch>
      <Route exact path='/signin' component={SignIn} />
      <Route exact path='/signup' component={SignUp} />
      <Route path='/post/edit(/:id)?' component={PostEdit} />
      <Route path='/profile(/:id)?' component={Profile} />
    </Switch>
  )
}

export default Router