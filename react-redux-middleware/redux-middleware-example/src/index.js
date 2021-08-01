import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import counterReducer from './store/reducer';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { capAt10Middleware, myLoggerMiddleware, secondMiddleware } from './store/middlewares';
import logger from 'redux-logger';

const store = createStore(
  counterReducer, 
  applyMiddleware(myLoggerMiddleware, secondMiddleware, capAt10Middleware, logger)
)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
