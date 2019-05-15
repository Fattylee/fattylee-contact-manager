import React, { Fragment } from 'react';
import { Context } from '../context';
import Contact from './Contact';


const Contacts = () => {
    return (
      <Context.Consumer>
        { state => {
          return (
            <Fragment>
              { !!state.contacts.length && (<h1 className='text-white'>Contact List</h1>)}
              {
                !!!state.contacts.length ? 
                <h2 className='text-warning'>No Contact</h2> : 
                state.contacts.map(contact => 
                <Contact 
                key={contact.id} 
                contact={contact} 
                dispatch={state.dispatch}
                />)
                
                }
            </Fragment>
           )
        }}
      </Context.Consumer>
    )
};

export default Contacts;

