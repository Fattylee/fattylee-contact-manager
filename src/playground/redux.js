import { createStore, combineReducers } from 'redux';


const person = {
  name: 'Abu Adnaan',
  email: 'fattylee.remod@gmail.com',
  address: {
    ip: '234.738.975.001',
    city: 'itele lafemwa',
    state: 'ogun',
  },
  stack: ['nodejs', 'javaacript', 'css', 'html5', 'git'],
};

// console.log(person);

const counterReducer = ((state = { counter: 0 }, {type, payload = 1 }) => {
  switch(type) {
    case 'INCREASE':
      return {
        ...state,
        counter: state.counter + payload,
      };
    case 'DECREASE':
      return {
        ...state,
        counter: state.counter - payload,
      };
    case 'SET':
      return {
        ...state,
        counter: 15
      }
    default:
      return state;
  }
  
});

const cr = combineReducers({
  count: counterReducer,
});

const store = createStore(cr);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({ type: 'INCREASE', payload: 10 });
store.dispatch({ type: 'INCREASE', });
store.dispatch({ type: 'DECREASE', payload: 5 });
store.dispatch({ type: 'INCREASE', });
store.dispatch({ type: 'SET'});
store.dispatch({ type: 'DECREASE',  });

