import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <Fragment>
      <div className=''>
      <div className='display-3 text-white'><span className='text-danger'>404</span> Contact Manager Page 
     
      </div>
       <p className='text-white mt-4 lead'>Sorry, that page does not exist  
      <button className='btn btn-danger ml-1'>
        <NavLink className='text-white' to='/'>Go to home page</NavLink>
      </button>
      </p>
      </div>
   </Fragment>
  )
}



export default NotFound;