import axios from 'axios';
import { browserHistory } from 'react-router';
import {FETCH_BARS, 
        RSVP, 
        Confirmed,
        AUTH_USER,
        UNAUTH_USER,
        AUTH_ERROR,
        FETCH_MESSAGE} from './types';

const ROOT_URL='http://localhost:3000'

export function fetchBars(city) {
  return function(dispatch){
    axios.post(`${ROOT_URL}/search/${city}`)
      .then(({data})=>    
          dispatch({type:FETCH_BARS,payload:data})
    )
  }      
}

export function confirmEvent(bar,update){
  axios.put(`${ROOT_URL}/venue/${bar}`,update)
  return {type:RSVP, payload:update}
}

export function signupUser({ email, password }) {
  return function(dispatch) {

    axios.post(`${ROOT_URL}/signup`, { email, password })
      .then(response => {
        console.log(response)
        dispatch({ type: AUTH_USER});
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('email', response.data.email);
        browserHistory.push('/');
      })
  }
}
export function signinUser({ email, password }) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/signin`, { email, password })
      .then(response => {
        dispatch({ type: AUTH_USER});
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('email', response.data.email);
        browserHistory.push('/');
      })
      .catch(() => {
        dispatch(authError('Bad Login Info'));
      });
  }
}



export function signoutUser() {
  localStorage.clear();

  return { type: UNAUTH_USER };
}


export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}