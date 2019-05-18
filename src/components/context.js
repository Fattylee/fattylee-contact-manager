import React, { Component, Fragment, createContext } from 'react';
import ReactDOM from 'react-dom';

export const Context = createContext();

const reducer = (state, action) => {
  switch(action.type) {
    case 'REMOVE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== action.payload.id),
      };
    case 'ADD_CONTACT':
      let id = 1 ;
      if(state.contacts.length) id  = [...state.contacts].sort((a,b) => -a.id + b.id)[0].id + 1 ;
      const payload = { id, ...state.newContact }
      console.log(payload);
      return {
        ...state,
        contacts:  [...state.contacts, payload],
      };
    case 'TOGGLE_CONTACTS':
      return {
        ...state,
        showContact: !state.showContact,
      }
    case 'TOGGLE_ADD_CONTACT':
      return {
        ...state,
        isAddContactOpen: !state.isAddContactOpen,
      }
    case 'ALERT_ERROR':
      return {
        ...state,
        error: action.payload,
      }
    case 'UPDATE_FORM_INPUT':
      return {
        ...state,
        newContact: {
          ...state.newContact,
          ...action.payload,
        },
      };
    case 'CLEAR_FORM_INPUT':
      return {
        ...state,
        newContact: {
          ...state.newContact,
          ...action.payload,
        },
      };
    case 'TOGGLE_CONTACTS_DETAILS':
      return {
        ...state,
        toggleContactsDetail: !state.toggleContactsDetail,
      };
    default: 
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: 'Abu Adnaan',
        email: 'abuadnaan@gmail.com',
        phone: '080-7777-0364',
      },
      {
        id: 2,
        name: 'Ummu Abdillah',
        email: 'abuadnaan@gmail.com',
        phone: '070-6787-0354',
      },
      {
        id: 3,
        name: 'Fattylee Hack',
        email: 'fattyleehack@gmail.com',
        phone: '090-5506-0654',
      },
    ],
    dispatch: (action) => this.setState( prevState => reducer(prevState, action)),
    showContact: true,
    isAddContactOpen: true,
    newContact: {
      name: '',
      email: '',
      phone: '',
    },
    error: undefined,
    showContactDetail: false,
    toggleContactsDetail: false,
  };
  
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}