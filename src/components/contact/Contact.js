import React, { Fragment } from 'react';
// import { Context } from '../context';

const Contact = ({ contact: { id, name, email, phone }, dispatch }) => {
  return (
      <Fragment>
        <div className='card mb-3'>
          <div className='card-header'>Name: {name}</div>
          <div className='card-body'>
            <div>Email: {email}</div>
            <div>Phone: {phone}</div>
          </div>
          <button onClick={handleRemove.bind(null, id, dispatch)}>Remove {name}</button>
        </div>
      </Fragment>    
    );       
};
const handleRemove = (id, dispatch) => {
  const action = {
    type: 'REMOVE_CONTACT',
    payload: { id, },
  };
  dispatch(action);
}
export default Contact;

