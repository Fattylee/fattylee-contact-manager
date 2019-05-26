import React, { Fragment, Component } from 'react';
import {Context} from '../context';
import InputField from '../layouts/InputField';
import CLEAR_FORM_INPUT from '../../helpers/CLEAR_FORM_INPUT';


let _dispatch;

class EditContact extends Component {
  componentDidMount() {
   const id  = this.props.match.params.id;
   _dispatch({ type: 'EDIT_CONTACT_INPUT', payload: id });
  }
  render () {
  return (
      <Context.Consumer>
      {
        ({ dispatch, newContact, }) => {
          _dispatch = dispatch;
          const id = this.props.match.params.id;
      return  (
         <Fragment>
          
        
        <div className="card mb-4 max-width">
  <div className="card-header">
   <i className='fas fa-feather-alt'></i> Edit Contact
   <i 
   className='fas fa-times-circle text-danger float-right'
   onClick={() => {
     CLEAR_FORM_INPUT(dispatch);
     this.props.history.push('/');
   }}
   ></i>
  </div>
  <div className="card-body">
    <form
      onSubmit={handleEditContact.bind(this, dispatch, newContact, id, this.props)}
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
      
      <input type="submit" value="Update Contact" className="btn btn-block" /> 
    </form>
  </div>
</div>
      </Fragment>    
        )}
        }
      </Context.Consumer>
    );       
};
}


const handleEditContact = (dispatch, newContact, id, props ) => {
  event.preventDefault();

  let { name, email, phone, } = newContact;
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
  dispatch({type: 'EDIT_CONTACT', payload: {
    id, name, email, phone,
  }, });
  
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


export default EditContact;