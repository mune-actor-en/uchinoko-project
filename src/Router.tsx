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
  Timeline,
} from './templates'

const Router: FC = () => {
  return (
    <Switch>
      <Route exact path='/signin' component={SignIn} />
      <Route exact path='/signup' component={SignUp} />
      <Route path='/post/edit(/:id)?' component={PostEdit} />
      <Route path='/profile(/:id)?' component={Profile} />
      <Route exact path='/timeline' component={Timeline} />
    </Switch>
  )
}

export default Router