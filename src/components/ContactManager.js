import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
//import { BrowserRouter, Route, Link } from 'react-router-dom';
import '../styles/bootstrap-4.0.0-beta.min.css';
import '../styles/style.less';
import Header from './Header';
import Contacts from './contact/Contacts';

class ContactManager extends Component {
  render () {
    return (
    <Fragment>
      <Header branding={'CM'} />
      <div className='container'>
        <Contacts />
      </div>
    </Fragment>
    );
  }
}

export default ContactManager;

