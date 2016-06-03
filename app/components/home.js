import React,{Component} from 'react';
import APP from './Search_Components/rsvp';
import Header from './header';


export default class Home extends Component {
  render() {
    return (
    <div>
      <Header/>
        <div className='home-menu'>
		      <h1>What's Happenin'?</h1>
    	     <APP/>  
    	</div>     
    </div>
    );
  }
}

