import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './App';
// import reportWebVitals from './reportWebVitals';

window.baseUrl="https://buyenergy.herokuapp.com/public/api/"
// window.baseUrl="http://localhost/buyenergy_api/public/api/"

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    
    <App/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
// reportWebVitals();
