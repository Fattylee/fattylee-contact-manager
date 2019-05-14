import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

const Header = ({branding}) => {
  return (
    <Fragment>
   	  <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
   	  <div className='container'>
   	    <a className="navbar-brand" href="/">{branding}</a>
    		<div>
      		<ul className="navbar-nav mr-auto">
        		<li className="nav-item">
        		  <a className="nav-link" href="/">Home</a>
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

export default Header;