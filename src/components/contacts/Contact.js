import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Context } from '../context';

const Contact = ({ contact: { id, name, email, phone, visible }, dispatch }) => {
  let buttonClass = 'btn-contact-detail text-dark fas fa-caret-square-';
        return (
       <Fragment> 
        <div className='card mb-3'>
          <h5 className='card-header flex'>
            <div
            onClick={() => {
              dispatch({type: 'TOGGLE_SHOW_CONTACT_DETAIL', payload: id });
              }
            }
            >{name} {' '}
            <button
             className={visible ? `${buttonClass}up`: `${buttonClass}down` }
            ></button>
            </div>
            <div>
            <Link to={`/edit/${id}`}>
              <i 
            className='fas fa-edit text-secondary mr-3'
            ></i>
            </Link>
            <i  onClick={handleRemove.bind(null, id, dispatch)}
            className='fas fa-times text-danger'
            ></i>
            </div>
          </h5>
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

const handleRemove = async (id, dispatch) => {
  const action = {
    type: 'REMOVE_CONTACT',
    payload: { id, },
  };
  const apiUrl = 'https://jsonplaceholder.typicode.com/users';
  const res = await axios.delete(`${apiUrl}/${id}`);
  dispatch(action);
};

export default Contact;