import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';


import '../styles/bootstrap-4.0.0-beta.min.css';
import '../styles/style.less';
import Header from './layouts/Header';
import Contacts from './contacts/Contacts';
import AddContact from './contacts/AddContact';
import { Provider, Context } from './context';

class ContactManager extends Component {
  render () {
    return (
    <Fragment>
    <Provider>
      <Header branding={'CM'} />
      <div className='container'>
        <AddContact />
        <Contacts className='flex'/>
      </div>
    </Provider>
    </Fragment>
    );
  }
}

export default ContactManager;