import React, { Component } from 'react';


const ListItem=({BAR,RSVP})=>{
  return(
        <li className='list-group-item'>
          <div className='row'>
            <div className='col-md-3'>
              <img src={BAR.image}/>
              <span className='badge' onClick={()=> RSVP(BAR)}>
                {BAR.going.length+' going'}
              </span> 
            </div>
            <div className='col-md-9'>
              <a href={BAR.url} target='_blank'>
                <strong>{BAR.name}</strong>
              </a> 
              <p>{BAR.phone}</p>
              <p>{BAR.address}</p>
              <p>{BAR.snippet}</p>
            </div>
          </div>     
        </li>

    )
}

export default ListItem;
