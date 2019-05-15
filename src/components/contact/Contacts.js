import React, { Fragment } from 'react';
import { Context } from '../context';
import Contact from './Contact';


const Contacts = () => {
    return (
      <Context.Consumer>
        { ({ contacts, dispatch, showContact }) => (
            <Fragment>
              { !!contacts.length && (<h1 className='text-white'>Contact List <span className='px-1'></span>
              <i 
              className={showContact ? "fas fa-caret-square-right" : "fas fa-caret-square-down"}
              onClick={toggleContact.bind(null, dispatch)}
              ></i>
              </h1>)
              }
              
              
              {
                !!!contacts.length ? 
                <h2 className='text-warning'>No Contact</h2> : 
                showContact && contacts.map(contact => (
                 
                  <Contact 
                      key={contact.id} 
                      contact={contact} 
                      dispatch={dispatch}
                />)
                )
                }
            </Fragment>
           )
        }
      </Context.Consumer>
    )
};

const toggleContact = (dispatch) => {
  const action = {
    type: 'TOGGLE_CONTACTS',
  };
  dispatch(action);
}
export default Contacts;

