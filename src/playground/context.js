import React ,{ Component, createContext, Fragment } from 'react';
import ReactDOM from 'react-dom';
//import 'normalize.css';
import './b-4-p/bs/css/bootstrap-4.0.0-beta.css';
import './style.less';


const Context = createContext();

const reducer = (state, action) => {
  switch(action.type) {
    case 'REMOVE_ITEM':
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.payload.id)
      };
    default: 
      return state;
  }
}
class Provider extends Component {
  state = {
    users: [
      {
        id: 1,
        name: 'Abu Adnaan',
        age: 31,
      },
      {
        id: 2,
        name: 'Ummu Abdillah',
        age: 25,
      },
      {
        id: 3,
        name: 'Smith Gold',
        age: 73,
      }
    ],
    dispatch: (action) => {
      this.setState(prevState => reducer(prevState, action))
    },
  }
  render () {
    return (
      <Context.Provider value={this.state}>
        { this.props.children }
      </Context.Provider>
    );
  }
} // End Provider: this is where we keep all states.

class Root extends Component {
  
  render() {
  
    return (
    <Provider>
      
             <div>
              <h1>Contact Manager App</h1>
              <button>Click Me For Good</button>
              <AddPerson />
              <Persons />
             </div>
     
    </Provider>
    );
  }
}


const Persons = () => {
  return (
    <Context.Consumer>
      {
        state => {
          return (
            <Fragment>
            
      {state.users.map(user => (
      <Person user={user} dispatch={state.dispatch} key={user.id} />
    ))}
    </Fragment>
          )
        }
      }
    </Context.Consumer>
 );
};

const Person = ({ user: {name, age, id}, dispatch }) => {
  
  return (
    <div className={'person'}>
      <div>
        <h3>Name: {name}</h3>
        <p>Age: {age}</p>
      </div>
      <button onClick={handleClick.bind(null, id, dispatch)}>X</button>
    </div>
  );
};

const handleClick = (id, patch ) => {
  const action = {
    type: 'REMOVE_ITEM',
    payload: {
      id,
    },
  };
  patch(action);
};

class AddPerson extends Component {
  render () {
  return (
  <Fragment>
    
<div className="card">
  <div className="card-header">
    Add Person
  </div>
  <div className="card-body">
    <form className="form">
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" className="form-control" placeholder="Name" />
      </div>
       <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" className="form-control" placeholder="Email..."/>
      </div>
       <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input type="tel" name="phone" id="phone" className="form-control" placeholder="Tel no."/>
      </div>
      <input type="button" value="Submit" className="btn btn-block" /> 
    </form>
  </div>
</div>
  </Fragment>
  );
  }
}
/*
constructor(props) {
  super(props);
  this.nameInput = React.createRef();
}
const name = this.nameInput.current.value;
<input type="text" value="Submit" className="btn btn-block" ref={this.nameInput}/> 
defaultValue
*/
ReactDOM.render(<Root />, document.querySelector('#app-root'));