import React from 'react';
import { Route, IndexRoute} from 'react-router';

import App from './components/app';
import PostsIndex from './components/posts-index';
import PostNew from './components/post-new';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={PostsIndex}/>
    <Route path="posts/new" component={PostNew} />
  </Route>
)

