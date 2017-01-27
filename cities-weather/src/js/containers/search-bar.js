import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    }
  }


  render() {
    return (
      <form className="input-group" onSubmit={e => {
        e.preventDefault();
        this.props.fetchWeather(this.state.value);
        this.setState({value: ''});
      }}>
        <input
          placeholder="Search for a City"
          className="form-control"
          value={this.state.value}
          onChange={e => this.setState({value: e.target.value})}
        />
        <span className="input-group-btn">
        <button className="btn btn-secondary">Search</button>
      </span>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({fetchWeather}, dispatch);
};

export default connect(null, mapDispatchToProps)(SearchBar);

