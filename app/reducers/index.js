import { combineReducers } from 'redux';
import BarsReducer from './reducer_bars';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './reducer_auth';


const rootReducer = combineReducers({
  venues: BarsReducer,
  form:reduxForm,
  auth: authReducer,
});

export default rootReducer;