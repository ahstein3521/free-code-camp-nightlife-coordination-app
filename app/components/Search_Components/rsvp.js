import React, { Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';
import Results from './result_list';
import SearchBar from './search_bar'
import _ from 'lodash';


class BarList extends Component {
	RSVP(bar){
	 if(!localStorage.email){ return alert('You need to be logged in for this to work') }
		const update=bar
		const v=this.props.venues
		const venues=v.venues
		const user=localStorage.email
       	const location=v.location;

       	if(_.contains(update.going,user)){
       		
       		update.going.splice(update.going.indexOf(user),1)
       	}
       	else{
       		
       		update.going.push(user)
       	}
       	venues[venues.indexOf(bar)]=update
       	v.venues=venues
       	this.props.confirmEvent(location,v)
	}

  	render(){  
    	return(
      		<div className='search-results'>
      			<SearchBar/>
      			<Results result={this.props.venues}  RSVP={(bar)=>{this.RSVP(bar)}}/>
    		</div>
    	)
  	}	    
}
function mapStateToProps({venues,confirmed,auth}) {
	// console.log(venues,auth)
  return { venues,auth};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}


export default connect(mapStateToProps,mapDispatchToProps)(BarList);

       	// if(data[index].going.indexOf(user)==-1){
       	// 	data[index].going.push(user);
       	// }
       	// else{
       	// 	data[index].going.splice(data[index].going.indexOf(user),1);	
       	// }