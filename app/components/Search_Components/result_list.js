import React, { Component} from 'react';
import Venue from './list_item'


const List=(props)=>{
   if(!props.result||!props.result.venues){
    return <p></p>
  }
   const list= props.result.venues.map((v,i)=>{
      return <Venue BAR={v} key={i} RSVP={props.RSVP}/>
    })
    return(
      <div className='search-results'>
        <div className='search-results-title'><h5>Top Results For {props.result.location}</h5></div>
        <ul className='list-group'>{list}</ul>
      </div>
    )

} 
export default List;
    

      

