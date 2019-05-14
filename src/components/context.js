import React, { Component, Fragment, createContext } from 'react';
import ReactDOM from 'react-dom';

export const Context = createContext();

const reducer = (state, action) => {
  switch(action.type) {
    case 'REMOVE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact !== action.payload.id),
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
    dispatch: (action) => reducer(this.state, action),
  };
  
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}