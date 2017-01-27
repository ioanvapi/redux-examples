import {FETCH_POSTS} from '../actions';

const INITIAL_STATE = {
  // all posts from server
  all: [],
  // active post - displayed with content
  post: null
};

const postsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      console.log('reducer', action.request);
      return { ...state, all: action.request.data };
      // return Object.assign(state, {all: action.request.data});
    default:
      return state;
  }
};

export default postsReducer;
