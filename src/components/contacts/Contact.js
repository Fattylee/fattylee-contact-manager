import React, { Fragment, Component } from 'react';
import { Context } from '../context';

const Contact = ({ contact: { id, name, email, phone, visible }, dispatch }) => {
  let buttonClass = 'btn-contact-detail text-dark fas fa-caret-square-';
        return (
       <Fragment> 
        <div className='card mb-3'>
          <div className='card-header flex'>
            <div
            onClick={() => {
              dispatch({type: 'TOGGLE_SHOW_CONTACT_DETAIL', payload: id });
              }
            }
            >Name: {name} {' '}
            <button
             className={visible ? `${buttonClass}down`: `${buttonClass}right` }
            ></button>
            </div>
            <i  onClick={handleRemove.bind(null, id, dispatch)}
            className='fas fa-times text-danger'
            ></i>
            
          </div>
          { 
            visible             
              && (
          <div className='card-body bg-grey'>
            <div>Email: {email}</div>
            <div>Phone: {phone}</div>
          </div>
          )}
        </div>
      </Fragment>
  )
};

const handleRemove = (id, dispatch) => {
  const action = {
    type: 'REMOVE_CONTACT',
    payload: { id, },
  };
  dispatch(action);
};

export default Contact;