import React, { Fragment, Component } from 'react';
import { Context } from '../context';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showContactDetail: true,
    };
  }
  render() {
    let buttonClass = 'btn-contact-detail text-dark fas fa-caret-square-';
    const { contact: { id, name, email, phone }, dispatch, toggleContactsDetail } = this.props;
    return (
  
       <Fragment>
        <div className='card mb-3'>
          <div className='card-header flex'>
            <div>Name: {name} {' '}
            <button  
            onClick={() => {
              this.setState((prevState) => ({
                showContactDetail: !prevState.showContactDetail,
              }));
            }}
            disabled={!toggleContactsDetail} className={this.state.showContactDetail ? `${buttonClass}right`: `${buttonClass}down` }
            ></button>
            </div>
            <i  onClick={handleRemove.bind(null, id, dispatch)}
            className='fas fa-times text-danger'
            ></i>
            
          </div>
          { 
            this.state.showContactDetail 
              &&
            toggleContactsDetail
              && (
          <div className='card-body bg-grey'>
            <div>Email: {email}</div>
            <div>Phone: {phone}</div>
          </div>
          )}
          
        </div>
      </Fragment>
    );       
  }
} 

const handleRemove = (id, dispatch) => {
  const action = {
    type: 'REMOVE_CONTACT',
    payload: { id, },
  };
  dispatch(action);
};

const handleShowContactDetail = (dispatch) => {
  dispatch({type: 'TOGGLE_CONTACT_DETAIL'});
};

export default Contact;