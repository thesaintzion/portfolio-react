import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Provider } from 'react-redux';
import store  from './redux/store';  
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
reportWebVitals();





