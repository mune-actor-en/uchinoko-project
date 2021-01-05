// Redux
import { signInAction } from './actions'
// lib
import { siginIn } from '../../lib/Auth'
// types
import { User } from '../../types'

export const signIn = (email: string, password: string) => {
  return async (dispatch: any) => {
    const res = await siginIn(email, password)

    if (res.status !== 200) {
      alert('サインインに失敗しました')
      return false
    }

    const data = await res.json()
    const user: User = {
      id: data.uid,
      email: email,
      token: data.token,
    }

    dispatch(signInAction(user))
  }
}