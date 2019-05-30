import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from 'react-router-dom';

const Header = ({branding}) => {
  return (
    <Fragment>
     <nav className="navbar navbar-expand-sm navbar-dark bg-danger  mb-3 py-3 nav-shadow">
   	  <div className='container'>
   	    <NavLink className="navbar-brand" to="/">
   	    { window.innerWidth > 420 && <i className='fas fa-user-circle mr-1'></i>
   	    }
   	    {branding}
   	    </NavLink>
   	    <input type="checkbox" id='trigger'/>
   	    <label htmlFor="trigger">
   	    <div className="navbar-toggler"> 
           <i></i>
           <i></i>
           <i></i>
           <i></i>
        </div>
        </label>
  
    		<div className='collapse navbar-collapse' id="fattylee">
      		<ul className="navbar-nav ml-auto">
        		<li className="nav-item">
        		  <NavLink exact activeClassName='is-active' className="nav-link" to="/"><i className='fas fa-home'></i> Home</NavLink>
        		</li>
        		<li className="nav-item">
        		  <NavLink activeClassName='is-active' className="nav-link" to="/add"><i className='fas fa-plus'></i> Add Contact</NavLink>
        		</li>
        		<li  className="nav-item">
        		  <NavLink activeClassName='is-active' className="nav-link" to="/about"><i className='fas fa-question-circle'></i> About</NavLink>
        		</li>
      		</ul>
    		</div>
   	  </div>
   	  </nav>
   </Fragment>
  )
}

Header.defaultProps = {
  branding: 'Contact-Manager',
};

Header.propTypes = {
  branding: PropTypes.string.isRequired,
}

export default Header;