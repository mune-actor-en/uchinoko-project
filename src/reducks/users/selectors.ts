import { createSelector } from 'reselect'

const usersSelector = (state: any) => state.users

export const getEmail = createSelector(
  [usersSelector],
  state => state.email
)

export const getToken = createSelector(
  [usersSelector],
  state => state.token
)

export const getUserId = createSelector(
  [usersSelector],
  state => state.id
)
