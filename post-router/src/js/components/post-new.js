import React from 'react';
import {Field, reduxForm} from 'redux-form';

import {createPost} from '../actions';

class PostNew extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <h3>Create A New Post</h3>
        <div className="form-group">
          <label>Title</label>
          <Field name="title" component="input" type="text" className="form-control"/>
        </div>
        <div className="form-group">
          <label>Categories</label>
          <Field name="categories" component="input" type="text" className="form-control"/>
        </div>
        <div className="form-group">
          <label>Content</label>
          <Field name="content" component="textarea" className="form-control"/>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    )
  }
}

export default reduxForm({
    form: 'PostsNewForm',
    onSubmit: createPost
  })(PostNew);

