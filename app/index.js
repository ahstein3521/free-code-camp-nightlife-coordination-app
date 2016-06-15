import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory,IndexRoute,Route } from 'react-router';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';
import App from './components/app';
import Home from './components/home';
import SignUp from './components/auth/signup';
import SignIn from './components/auth/signin';





const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);




ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
    	<Route path='/' component={App}>
		    <IndexRoute component={Home} />
		    <Route path="/signup" component={SignUp}/>
		    <Route path="/signin" component={SignIn} />
	    </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));

