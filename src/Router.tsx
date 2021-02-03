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
  PetRegist,
  TimeLine,
  PetsList,
} from './templates'

const Router: FC = () => {
  return (
    <Switch>
      <Route exact path='/signin' component={SignIn} />
      <Route exact path='/signup' component={SignUp} />
      <Route path='/post/edit(/:id)?' component={PostEdit} />
      <Route path='/profile(/:id)?' component={Profile} />
      <Route path='/pet/regist' component={PetRegist} />
      
      <Route path='/timeline' component={TimeLine} />
      <Route path='/petslist' component={PetsList} />
    </Switch>
  )
}

export default Router