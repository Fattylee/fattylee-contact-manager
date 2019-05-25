import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from 'react-router-dom';

const Header = ({branding}) => {
  return (
    <Fragment>
   	  <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
   	  <div className='container'>
   	    <NavLink activeClassName='is-active' className="navbar-brand" to="/">{branding}</NavLink>
    		<div>
      		<ul className="navbar-nav mr-auto">
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