import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';


import '../styles/bootstrap-4.0.0-beta.min.css';
//import '../styles/fontawesome-free-5.8.2-web/css/all.css'
import '../styles/style.less';
import Header from './Header';
import Contacts from './contact/Contacts';
import AddContact from './contact/AddContact';
import { Provider, Context } from './context';

class ContactManager extends Component {
  render () {
    return (
    <Fragment>
    <Provider>
      <Header branding={'CM'} />
      <div className='container'>
        <AddContact />
        <Contacts />
      </div>
    </Provider>
    </Fragment>
    );
  }
}

export default ContactManager;

