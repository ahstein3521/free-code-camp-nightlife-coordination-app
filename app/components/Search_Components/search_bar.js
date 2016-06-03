import React, { Component } from 'react';
import { Link } from 'react-router';
import Results from './result_list';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';


class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: ''};

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit=this.onFormSubmit.bind(this);
  }
  onInputChange(e) {
    this.setState({term:e.target.value});
  }
  
  onFormSubmit(e){
    e.preventDefault();
    this.props.fetchBars(this.state.term);
  }  
  render() {
    return (
      <div>
        <form  className="input-group" onSubmit={this.onFormSubmit}>
          <input
            placeholder="See what folks are up to in your city..."
            className="form-control"
            value={this.state.term}
            onChange={this.onInputChange} />
          <span className="input-group-btn">
            <input type="submit" className="btn btn-secondary"/>
          </span>
        </form>
        <p className='yelp'>Search Powered By Yelp!</p>
        <Results/>
      </div>
    );
  }

}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}


export default connect(null,mapDispatchToProps)(SearchBar);