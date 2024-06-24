import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>
);

reportWebVitals();
