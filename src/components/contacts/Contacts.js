import React, { Fragment, Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Context } from '../context';
import Contact from './Contact';


class Contacts extends Component {
  
  render() {
    return (
      <Context.Consumer>
        { ({ contacts, dispatch, showContact, toggleContactsDetail, }) => {
         return (
            <Fragment>
              { !!contacts.length && (
              <Fragment>
              <h1 className='text-white display-4'>
              <span className='h3'>
              <i 
              className={showContact ? "fas fa-caret-square-down" : "fas fa-caret-square-right"}
              onClick={toggleContact.bind(null, dispatch)}
              ></i>
              <i
              className={toggleContactsDetail ? "fas fa-list-alt ml-2 text-white" : "fas fa-list-alt ml-2 text-dark"}
              onClick={toggleContactDetails.bind(null, dispatch)}
              >
              </i>
              </span>
            
              <span className='text-danger ml-1'>Contact</span> List 
              
              </h1>
              </Fragment>)
              }
              
              {
                !!!contacts.length ? 
               
                <h2 className='text-warning'>No Contact <NavLink  className="btn btn-danger btn-span" to="/contact"><i className='fas fa-plus'></i> Add Contact</NavLink>
                </h2>
               
                : 
               <div className='contacts'>
               {
                // show contact
               showContact &&
              contacts.map(contact => (
                 
                  <Contact 
                      key={contact.id} 
                      contact={contact} 
                      dispatch={dispatch}
                />)
                )
                }
                </div>
                }
            </Fragment>
           )}
        }
      </Context.Consumer>
    )
  }
};

const toggleContact = (dispatch) => {
  const action = {
    type: 'TOGGLE_CONTACTS',
  };
  dispatch(action);
};

const toggleContactDetails = (dispatch) => {
  const action = {
    type: 'TOGGLE_CONTACTS_DETAILS',
  };
  dispatch(action);
  dispatch({type: 'CHANGE_ALL_CONTACT_VISIBILITY'});
};

export default Contacts;
