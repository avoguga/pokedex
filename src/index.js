import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import About from './pages/About';

ReactDOM.render(
  <React.StrictMode>
    <App/>    
    <About/>
  </React.StrictMode>,
  document.getElementById('root')
);

