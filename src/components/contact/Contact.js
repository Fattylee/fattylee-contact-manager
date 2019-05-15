import React, { Fragment } from 'react';
// import { Context } from '../context';

const Contact = ({ contact: { id, name, email, phone }, dispatch }) => {
  return (
      <Fragment>
        <div className='card mb-3'>
          <div className='card-header flex'>
            <div>Name: {name}</div>
            <i  onClick={handleRemove.bind(null, id, dispatch)}
            className='fas fa-times text-danger'
            ></i>
          </div>
          <div className='card-body bg-grey'>
            <div>Email: {email}</div>
            <div>Phone: {phone}</div>
          </div>
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

