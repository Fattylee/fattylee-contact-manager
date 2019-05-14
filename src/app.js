import React from 'react';
import ReactDOM from 'react-dom';

import ContactManager from './components/ContactManager';

/*
const handleClick = (num, num1, e) => {
  console.log('event',num, num1, e.target)
};
const Root = () => (
  <div onClick={handleClick.bind(handleClick, 3, 5)}>
    This is root page
  </div>
);

const CreateExpensePage = () => (
  <div>
    This is create page
  </div>
);

const EditExpensePage = () => (
  <div>
    This is the edit page
  </div>
);

const HelpPage = () => (
  <div>
    This is help page
  </div>
)

const ErrorPage = () => (
  <div>
    This is 404 page
  </div>
);
const root = (
  <BrowserRouter>
    <div>
      <nav>
      
      <ul>
      <li>
      <Link to="/">Home</Link>
      </li>
      <li>
      <Link to="/create/">Create</Link>
      </li>
      <li>
      <Link to="/edit/">Edit</Link>
      </li>
      <li>
      <Link to="/help/">Help</Link>
      </li>
      </ul>
      </nav>
      <h1 style={{color: 'pink', textAlign: 'center'}}>Expensify</h1>
      <Route path='/' component={Root} exact />
      <Route path='/create' component={CreateExpensePage} />
      <Route path='/edit' component={EditExpensePage} />
      <Route path='/help' component={HelpPage} />
      <Route component={ErrorPage} />
    </div>
  </BrowserRouter>
);
*/

ReactDOM.render(<ContactManager />, document.querySelector('#app-root'));