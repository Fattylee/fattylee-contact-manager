import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import '../styles/bootstrap-4.0.0-beta.min.css';
import '../styles/style.less';
import Header from './layouts/Header';
import Contacts from './contacts/Contacts';
import AddContact from './contacts/AddContact';
import About from './pages/About';
import NotFound from './pages/NotFound';
import { Provider, Context } from './context';

class ContactManager extends Component {
  render () {
    return (
    <Fragment>
    <Provider>
    <Router>
      <Header branding={'CM'} />
      <div className='container'>
        <Switch>
          <Route exact path='/' component={Contacts} />
          <Route  path='/contact' component={AddContact} />
          <Route  path='/about' component={About} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
    </Provider>
    </Fragment>
    );
  }
}

export default ContactManager;

