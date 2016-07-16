import { FETCH_BARS,RSVP } from '../actions/types';

export default function(state=null, action) {
 	switch (action.type) {
  	case FETCH_BARS:
    	return action.payload;
  	case RSVP:
  		return {...state,...action.payload}  
  }
  return state;
}
