import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import '../src/assets/styles/Global.scss';
import './assets/scss/bootstrap.scss';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>

)
