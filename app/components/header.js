import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Link } from 'react-router';

class Header extends Component {
  LoggedOut() {
      return(<div>
                <Link to={'/signup'}> 
                  <button className="btn btn-default navbar-btn" >Sign Up</button>
                </Link>
                <Link to={'/signin'}> 
                  <button className="btn btn-default navbar-btn" >Sign In</button>
                </Link>
              </div>) 
              
  }
  LoggedIn(){
    const className="btn btn-default navbar-btn";
    
    return <button className={className} onClick={()=>{this.props.signoutUser()}}>Sign Out</button>
  }
  authButton(){
    if(window.localStorage.token){
      return this.LoggedIn();
    }else{
      return this.LoggedOut()
    }
  }
  render() {
    return (
      <nav className="navbar">
          <span className="navbar-right">
            {this.authButton()}
            </span>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth.authenticated };
}

export default connect(mapStateToProps, actions)(Header);