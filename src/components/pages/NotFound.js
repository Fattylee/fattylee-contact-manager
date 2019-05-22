import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <Fragment>
      <div className='display-4 text-white'><span className='text-danger'>404</span> Contact Manager Page 
      <button className='btn btn-danger'>
        <NavLink className='text-white' to='/'>Go to home page</NavLink>
      </button>
      </div>
      
   </Fragment>
  )
}



export default NotFound;