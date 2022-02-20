import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.scss';
import App from './App';
import Footer from 'components/footer/Footer';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
