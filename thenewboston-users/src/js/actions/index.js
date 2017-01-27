//this action creator function will return an action
// that contains type and data/payload
export const selectUser = (user) => {
  console.log('user:', user.first);

  return {
    type: 'USER_SELECTED',
    payload: user
  }
}
