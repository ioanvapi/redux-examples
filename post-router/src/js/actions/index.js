import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=sdsgdfgsdfgsdfgs';

export const fetchPosts = () => {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  console.log('request', request);

  return {
    type: FETCH_POSTS,
    request,
  }
};

