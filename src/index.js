import React from 'react';
import ReactDOM from 'react-dom/client';
import './indexx.css';
import { Provider } from 'react-redux';



import App from './App';
import { store } from './Redux/Store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />

  </Provider>
);

