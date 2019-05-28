import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';


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

// addExpense 
const addExpense = ({ 
  note='', 
  description='', 
  amount=0, 
  createdAt = Date.now() } = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
      id: uuid(),
      note,
      description,
      amount,
      createdAt,
    }
});

// deleteExpense
const deleteExpense = (id) => ({
  type: 'DELETE_EXPENSE',
  expense: { id },
});

// editExpense
const editExpense = (id, expense) => ({
  type: 'EDIT_EXPENSE',
  id,
  expense,
})

// setTextFilter
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text,
});

// sortByDate
const sortByDate = () => ({
  type: 'SORT_BY_DATE',
  sortBy: 'date',
});

// sorByAmount
const sorByAmount = () => ({
  type: 'SORT_BY_AMOUNT',
  sortBy: 'amount',
});

// setStartDate
const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate,
});

// setEndDate
const setEndDate = (endDate = undefined) => ({
  type: 'SET_END_DATE',
  endDate,
});

const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch(action.type) {
    case 'ADD_EXPENSE':
      return [action.expense, ...state];
    case 'DELETE_EXPENSE':
      return state.filter(({ id }) => id !== action.expense.id );
    case 'EDIT_EXPENSE':
      return state.map((expense) => expense.id === action.id ? {...expense, ...action.expense}: expense );
    default:
      return state;
  }
};

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date', //date or amount
  startDate: undefined,
  endDate: undefined,
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch(action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text,
      };
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: action.sortBy,
      }
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: action.sortBy,
      }
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate,
      }
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate,
      }
    default:
      return state;
  }
};

const cr = combineReducers({
  expenses: expensesReducer,
  filters: filtersReducer,
});

const store = createStore(cr);

const getVisibility = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter(expense => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate  ;
    const endDateMatch = typeof expense.createdAt !== 'number' ||  expense.createdAt <= endDate;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
    
    return startDateMatch && endDateMatch && textMatch;
  });
};

const unsubscribe = store.subscribe(() => {
  const state = store.getState();
  console.log(state);
  const filteredMatches = getVisibility(state.expenses, state.filters);
  console.log(filteredMatches);
});
/*
store.dispatch({ type: 'INCREASE', payload: 10 });
store.dispatch({ type: 'INCREASE', });
store.dispatch({ type: 'DECREASE', payload: 5 });
store.dispatch({ type: 'INCREASE', });
store.dispatch({ type: 'SET'});
store.dispatch({ type: 'DECREASE',  });
*/

/*
const addExpenseOne = 
store.dispatch(addExpense({ 
  note: 'rent payment', 
  description: 'payment for the month of april', 
  amount: 200,
  createdAt: 10,
  }));
const addExpenseTwo = store.dispatch(addExpense());

store.dispatch(addExpense({ 
  note: 'nepa bill', 
  description: 'payment for the month of april', 
  amount: 2002,
  createdAt: 12,
  }));

store.dispatch(deleteExpense(addExpenseTwo.expense.id));
// console.log(addExpenseOne, addExpenseTwo);
//store.dispatch({type: 'ADD_EXPENSE', text: 'fattylee'});

store.dispatch(editExpense(addExpenseOne.expense.id, { note: 'lost', amount: 250 }));

store.dispatch(addExpense({ 
  note: 'umrah bill', 
  description: 'payment for the 2019 umrah', 
  amount: 2002900,
  createdAt: 52,
  }));
*/
//store.dispatch(setTextFilter('rent'));
store.dispatch(addExpense({createdAt: 10, description: 'team Rivendell'}));
store.dispatch(setTextFilter('team'));
store.dispatch(addExpense({ createdAt: 16, description: 'Fattylee hacked'}));
//store.dispatch(sortByDate(73883883));
store.dispatch(addExpense());
//store.dispatch(sorByAmount(300));
//store.dispatch(addExpense());
store.dispatch(setStartDate(1));
store.dispatch(addExpense());
store.dispatch(setEndDate(111));
store.dispatch(addExpense());