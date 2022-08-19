import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import {legacy_createStore as createStore} from "redux";
import rootReducer from "./reducers/index.js"
import {Provider} from 'react-redux'
import App from './App';


const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


