import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';


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
    <Fragment>
      <Header branding={'CM'} />
      <div className='container'>
        <Switch>
          <Route exact path='/' component={Contacts} />
          <Route exact path="/contact" component={AddContact} />
          <Route exact path='/about' component={About} />
          <Route component={NotFound} />
        </Switch>
      </div>
     </Fragment>
    </Router>
    </Provider>
    </Fragment>
    );
  }
}

export default ContactManager;