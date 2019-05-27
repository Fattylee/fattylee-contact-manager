import React, { Fragment, Component } from 'react';
import uuid from 'uuid';
import axios from 'axios';
import {Context} from '../context';
import InputField from '../layouts/InputField';
import CLEAR_FORM_INPUT from '../../helpers/CLEAR_FORM_INPUT';

let _dispatch;
class AddContact extends Component {
  
  componentDidMount() {
    CLEAR_FORM_INPUT(_dispatch)
  }
  render () {
  return (
      <Context.Consumer>
      {
        ({ dispatch, newContact, }) => {
        _dispatch = dispatch;
        return (
         <Fragment>
          
        <div className="card mb-4 max-width">
  <div className="card-header">
    <i className='fas fa-plus'></i> Add New Contact
    <i 
   className='fas fa-times text-danger float-right'
   onClick={() => {
     CLEAR_FORM_INPUT(dispatch);
     this.props.history.push('/');
   }}
   ></i>
  </div>
  <div className="card-body">
    <form
      onSubmit={handleAddContact.bind(null, dispatch, newContact, this.props)}
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
</div>
      </Fragment>    
        )}
        }
      </Context.Consumer>
    )};       
};


const handleAddContact = async (dispatch, newContact, props) => {
  event.preventDefault();
  
  newContact.visible = false;
  let { name, email, phone, visible } = newContact;
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
  
  const apiUrl = 'https://jsonplaceholder.typicode.com/users';
  const payload = {
     name, email, phone, visible,
  };
  try {
  const res = await axios.post(apiUrl, payload);
  console.log(res, 'ADD_CONTACT');
  payload.id = res.data.id;
  dispatch({type: 'ADD_CONTACT', payload, });
  }
  catch(e) {
    console.log('Something went wrong. Try again pls.', e.message);
  }
  CLEAR_FORM_INPUT(dispatch);
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