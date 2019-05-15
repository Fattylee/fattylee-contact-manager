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
    case 'TOGGLE_CONTACTS':
      return {
        ...state,
        showContact: !state.showContact,
      }
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
    dispatch: (action) => this.setState(() => reducer(this.state, action)),
    showContact: true,
  };
  
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}