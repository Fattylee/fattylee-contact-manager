import React, { Component, Fragment, createContext } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


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
      };
    case 'EDIT_CONTACT_INPUT':
    
      const prepopulateContact = state.contacts.find(contact => contact.id == action.payload);
      const { name, email, phone } =  prepopulateContact;
      return {
        ...state,
        newContact: {
          name,
          email,
          phone,
          errors: {},
        },
      };
    case 'EDIT_CONTACT':
      return {
        ...state,
        contacts: state.contacts.map( contact => contact.id === action.payload.id ? action.payload : contact),
        
        /* {
          const { id, name, email, phone } = action.payload;
          if(contact.id == id) {
            return {
              ...contact,
              name,
              email,
              phone,
            };
          }
          return contact;
        }),*/
      };
    case 'SHOW_ALL_CONTACTS_DETAILS':
      return {
        ...state,
        contacts: state.contacts.map(contact => {
          contact.visible = true;
          return contact;
        }),
        toggleContactsDetail: true,
      };
    default: 
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [],
    dispatch: (action) => this.setState( prevState => reducer(prevState, action)),
    showContact: true,
    newContact: {
      name: '',
      email: '',
      phone: '',
      errors: {},
    },
    toggleContactsDetail: false,
  };
  
   async componentDidMount() {
    
    const isLargScreen = window.innerWidth > 420;
    
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    try {
    const res = await axios.get(apiUrl);
    this.setState(prevState => ({
        contacts: res.data,
      }));
    if(isLargScreen ){
      this.state.dispatch({type: 'SHOW_ALL_CONTACTS_DETAILS'});
    }
    }
    catch(e) {
      console.log('Something went wrong, Pls try again.', e.message);
    }
  }
  
  componentDidUpdate(prevProp, prevState) {
      const stringifyContacts = JSON.stringify(this.state.contacts);
      
      localStorage.setItem('contacts', stringifyContacts);
    
  }
  
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}