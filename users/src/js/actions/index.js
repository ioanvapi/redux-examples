
//action creator function returns an action
export const selectUser = function(user) {
  return {
    type: 'USER_SELECTED',
    payload: user
  }
};
