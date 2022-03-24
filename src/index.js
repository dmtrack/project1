import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Users from './components/user';
import "bootstrap/dist/css/bootstrap.css";


ReactDOM.render(
  <React.StrictMode>
    <Users/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
