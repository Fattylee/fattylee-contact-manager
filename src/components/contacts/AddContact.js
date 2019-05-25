import React, { Fragment } from 'react';
import uuid from 'uuid';
import {Context} from '../context';
import InputField from '../layouts/InputField';


const AddContact = (props) => {
  return (
      <Context.Consumer>
      {
        ({ dispatch, isAddContactOpen, newContact, }) => (
         <Fragment>
          
        {isAddContactOpen &&
        <div className="card mb-4 max-width">
  <div className="card-header">
    <i className='fas fa-plus'></i> Add New Contact
  </div>
  <div className="card-body">
    <form
      onSubmit={handleAddContact.bind(null, dispatch, newContact, props)}
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
      
      <input type="submit" value="Add Contact" className="btn btn-block" /> 
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

const handleAddContact = (dispatch, newContact, props) => {
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

  props.history.push('/');
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