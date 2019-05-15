import React, { Fragment } from 'react';
import {Context} from '../context';


const AddContact = () => {
  return (
      <Context.Consumer>
      {
        ({ dispatch, isAddContactOpen }) => (
         <Fragment>
        {
          <button 
            onClick={handleAddOpen.bind(null, dispatch)}
            className='mb-2'
          >{isAddContactOpen ? 'Add Contact' : 'Close Contact'} {' '}
            <i 
            className={ isAddContactOpen ? "fas fa-plus" : "fas fa-window-close text-danger" }    
            ></i>
          </button>
        }
        
        {!isAddContactOpen &&
        <div className="card mb-4">
  <div className="card-header">
    New Contact
  </div>
  <div className="card-body">
    <form className="form">
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" className="form-control" placeholder="Name..." />
      </div>
       <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" className="form-control" placeholder="Email..."/>
      </div>
       <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input type="tel" name="phone" id="phone" className="form-control" placeholder="Tel no..."/>
      </div>
      <input type="button" value="Submit" className="btn btn-block" /> 
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
}

export default AddContact;

