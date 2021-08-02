import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import New from './New';
import Login from './Login';
import Example from './Example';
import { store } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Route path="/" component={App} />
        <Route exact path="/quizzes/new" component={New} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/example" component={Example} />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
