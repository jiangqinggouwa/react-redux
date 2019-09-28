import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { Provider } from 'react-redux';
import reducer from './reducers/index'
import { createStore } from 'redux'
const store = createStore(reducer)

ReactDOM.render(
<Provider store = { store as any } >
  <App />
  </Provider>,
   document.getElementById('root'));