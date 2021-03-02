import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import { startSetCharity } from './actions/charityAction'

const store = configureStore()
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(startSetCharity())
console.log(store.getState());

const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);
ReactDOM.render(jsx, document.getElementById("root"));