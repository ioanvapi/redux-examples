import React from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions';
import {Link} from 'react-router';

class PostsIndex extends React.Component {

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link to="/posts/new" className='btn btn-primary'>
            Add a Post
          </Link>
        </div>
        <h2>List of blogposts</h2>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.all
  }
};


export default connect(mapStateToProps, {fetchPosts})(PostsIndex);
