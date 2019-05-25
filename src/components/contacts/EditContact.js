import React, { Fragment, Component } from 'react';
import {Context} from '../context';
import InputField from '../layouts/InputField';

let _dispatch;

class EditContact extends Component {
  componentDidMount() {
    console.log('EditContact componentDidMount');
    _dispatch({ type: 'EDIT_CONTACT_INPUT', payload: this.props.match.params.id });
  }
  render () {
  return (
      <Context.Consumer>
      {
        ({ dispatch, isAddContactOpen, showContact, newContact, }) => {
          _dispatch = dispatch;
          const id = this.props.match.params.id;
      return  (
         <Fragment>
          
        {isAddContactOpen &&
        <div className="card mb-4 max-width">
  <div className="card-header">
   <i className='fas fa-feather-alt'></i> Edit Contact
  </div>
  <div className="card-body">
    <form
      onSubmit={handleEditContact.bind(this, dispatch, showContact, newContact, id, this.props)}
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
</div>}
      </Fragment>    
        )}
        }
      </Context.Consumer>
    );       
};
}


const handleAddOpen = (dispatch) => {
  const action = {
    type: 'TOGGLE_ADD_CONTACT',
  };
  dispatch(action);
};

const handleEditContact = (dispatch, showContact, newContact, id, props ) => {
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
  console.log('handleAddContact', newContact);
  dispatch({
    type: 'CLEAR_FORM_INPUT',
    payload: {
      name: '',
      email: '',
      phone: '',
    },
  });
  //dispatch({type: 'TOGGLE_ADD_CONTACT'});
  //showContact || dispatch({type: 'TOGGLE_CONTACTS'});
  
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