import React, { Fragment } from 'react';
import {Context} from '../context';


const AddContact = () => {
  return (
      <Context.Consumer>
      {
        ({ dispatch, isAddContactOpen, showContact, newContact, error, }) => (
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
            !!error && !isAddContactOpen && <div className='text-white bg-danger card mb-2 p-3 max-width'>{error} 
            <span><i className="fas fa-laugh-squint"></i><i className="fas fa-laugh-wink fa-2x text-dark bg-light ml-1"></i></span>
            </div>    }
          
        {!isAddContactOpen &&
        <div className="card mb-4 max-width">
  <div className="card-header">
    New Contact
  </div>
  <div className="card-body">
    <form
      onSubmit={handleAddContact.bind(null, dispatch, showContact, newContact)}
      className="form">
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" className="form-control" placeholder="Name..." 
        value={newContact.name}
        onChange={controlledInput.bind(this, dispatch)}
        />
      </div>
       <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" className="form-control" placeholder="Email..."
        value={newContact.email}
        onChange={controlledInput.bind(undefined, dispatch)}
        />
      </div>
       <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input type="tel" name="phone" id="phone" className="form-control" placeholder="Tel no..."
        value={newContact.phone}
        onChange={controlledInput.bind(null, dispatch)}
        />
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
    return dispatch({type: 'ALERT_ERROR', payload: 'Abeg use ur head fill this form!'});
  }
  
  dispatch({type: 'ADD_CONTACT'});
  dispatch({type: 'ALERT_ERROR', payload: undefined })
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
  console.log(fieldName, fieldValue);
  dispatch({
    type: 'UPDATE_FORM_INPUT',
    payload: {
      [fieldName]: fieldValue,
      }
  });
  
  
};


export default AddContact;

