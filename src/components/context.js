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
      return {
        ...state,
        contacts:  [action.payload, ...state.contacts],
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
        newContact: {
          ...state.newContact,
          errors: {
            ...state.newContact.errors,
            ...action.payload,
          },
        },
      };
    case 'RESET_ALERT_ERROR':
      return {
        ...state,
        newContact: {
          ...state.newContact,
          errors: {
          
          },
        },
      };
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
    case 'TOGGLE_SHOW_CONTACT_DETAIL':
      return {
        ...state,
        contacts: state.contacts.map(contact => {
          if(action.payload === contact.id) {
            return {
              ...contact,
              visible: !contact.visible,
            };
          }
          return contact;
        }),
      };
    case 'CHANGE_ALL_CONTACT_VISIBILITY':
      return {
        ...state,
        contacts: state.contacts.map( contact => {
          return {
            ...contact,
            visible: state.toggleContactsDetail,
          }
        })
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
        visible: false,
      },
      {
        id: 2,
        name: 'Ummu Abdillah',
        email: 'abuadnaan@gmail.com',
        phone: '070-6787-0354',
        visible: false,
      },
      {
        id: 3,
        name: 'Fattylee Hack',
        email: 'fattyleehack@gmail.com',
        phone: '090-5506-0654',
        visible: false,
      },
    ],
    dispatch: (action) => this.setState( prevState => reducer(prevState, action)),
    showContact: true,
    isAddContactOpen: true,
    newContact: {
      name: '',
      email: '',
      phone: '',
      errors: {},
    },
    toggleContactsDetail: false,
  };
  
  componentWillMount() {
    try {
      const contactsExist = localStorage.getItem('contacts');
      if(contactsExist) {
      
         const contacts = JSON.parse(contactsExist);
      this.setState(prevState => ({
        contacts,
      }));
      }
      else {
      const stringifyContacts = JSON.stringify(this.state.contacts);
      localStorage.setItem('contacts', stringifyContacts);
      
    }
    }
      catch(e) {
        console.log('An error occured', e);
      }
    
  }
  
  componentDidUpdate(prevProp, prevState) {
    if(prevState.contacts.length !== this.state.contacts.length) {
      
      const stringifyContacts = JSON.stringify(this.state.contacts);
      
      localStorage.setItem('contacts', stringifyContacts);
    
    console.log('contacts state persisted!');
    }
  }
  
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}