import React, { Fragment } from 'react';
import uuid from 'uuid';
import {Context} from '../context';
import InputField from '../layouts/InputField';


const AddContact = () => {
  return (
      <Context.Consumer>
      {
        ({ dispatch, isAddContactOpen, showContact, newContact, }) => (
         <Fragment>
          
          <button 
            onClick={handleAddOpen.bind(null, dispatch)}
            className='mb-2 btn btn-block btn-contact-open-close'
          >{!isAddContactOpen ? 'Add Contact' : 'Close New Contact'} {' '}
            <i 
            className={ !isAddContactOpen ? "fas fa-plus" : "fas fa-window-close text-danger" }    
            ></i>
          </button>
          
        {isAddContactOpen &&
        <div className="card mb-4 max-width">
  <div className="card-header">
    New Contact
  </div>
  <div className="card-body">
    <form
      onSubmit={handleAddContact.bind(null, dispatch, showContact, newContact)}
      className="form">
      {[['name', 'text'], ['email', 'email'], ['phone', 'tel']].map( (attr, key) => (
      <InputField
        name={attr[0]}
        value={newContact[attr[0]]}
        type={attr[1]}
        onChange={controlledInput.bind(null, dispatch)}
        errors={newContact.errors}
        key={key}
      />
      ))}
      
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
  
  newContact.id = uuid();
  newContact.visible = false;
  let { id, name, email, phone, visible } = newContact;
  name = name.trim();
  email = email.trim();
  phone = phone.trim();
  if(name === '') {
    return dispatch({
      type: 'ALERT_ERROR',
      payload: {name: 'Name field is required'}
      });
  }
  dispatch({type: 'RESET_ALERT_ERROR' });
  if(email === '') {
    return dispatch({
      type: 'ALERT_ERROR',
      payload: {email: 'Email field is required'}
      });
  }
  dispatch({type: 'RESET_ALERT_ERROR' });
 
  if(phone === '') {
    return dispatch({
      type: 'ALERT_ERROR',
      payload: {phone: 'Phone field is required'}
      });
  }
  dispatch({type: 'RESET_ALERT_ERROR' });
  dispatch({type: 'ADD_CONTACT', payload: {
    id, name, email, phone, visible,
  }, });
  
  dispatch({
    type: 'CLEAR_FORM_INPUT',
    payload: {
      name: '',
      email: '',
      phone: '',
    },
  });
  dispatch({type: 'TOGGLE_ADD_CONTACT'});
  showContact || dispatch({type: 'TOGGLE_CONTACTS'});
};

const controlledInput = (dispatch, event) => {
  const fieldName = event.target.name;
  const fieldValue = event.target.value;
  dispatch({
    type: 'UPDATE_FORM_INPUT',
    payload: {
      [fieldName]: fieldValue,
      }
  });
};


export default AddContact;
