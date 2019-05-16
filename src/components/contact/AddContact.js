import React, { Fragment } from 'react';
import {Context} from '../context';


const AddContact = () => {
  return (
      <Context.Consumer>
      {
        ({ dispatch, isAddContactOpen, showContact, newContact, error }) => (
         <Fragment>
          
          <button 
            onClick={handleAddOpen.bind(null, dispatch)}
            className='mb-2 btn-contact-open-close'
          >{isAddContactOpen ? 'Add Contact' : 'Close Contact'} {' '}
            <i 
            className={ isAddContactOpen ? "fas fa-plus" : "fas fa-window-close text-danger" }    
            ></i>
          </button>
          {
            !!error && !isAddContactOpen && <div className='text-white bg-danger card mb-2 p-3'>{error}</div>    }
          
        {!isAddContactOpen &&
        <div className="card mb-4">
  <div className="card-header">
    New Contact
  </div>
  <div className="card-body">
    <form
      onSubmit={handleAddContact.bind(null, dispatch, showContact, newContact)}
      className="form">
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" className="form-control" placeholder="Name..." />
      </div>
       <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" className="form-control" placeholder="Email..."/>
      </div>
       <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input type="tel" name="phone" id="phone" className="form-control" placeholder="Tel no..."/>
      </div>
      <input type="submit" value="Submit" className="btn btn-block" /> 
    </form>
  </div>
</div>}
      </Fragment>    
        )
        }
      </Context.Consumer>
    );       
};

const handleAddOpen = (dispatch) => {
  const action = {
    type: 'TOGGLE_ADD_CONTACT',
  };
  dispatch(action);
};

const handleAddContact = (dispatch, showContact, newContact) => {
  event.preventDefault();
  console.log(newContact);
  const { name, email, phone } = newContact;
  if(name == '' || email === '' || phone === '') {
    return dispatch({type: 'ALERT_ERROR', payload: 'Abeg use ur head fill the forms!'});
  }
  
  dispatch({type: 'ADD_CONTACT'});
  dispatch({type: 'ALERT_ERROR', payload: undefined })
  dispatch({type: 'CLEAR_INPUT'});
  dispatch({type: 'TOGGLE_ADD_CONTACT'});
  showContact || dispatch({type: 'TOGGLE_CONTACTS'});
  
};



export default AddContact;

