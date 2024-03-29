import React from 'react';
import ReactDOM from 'react-dom';
import App from "./pages/App";
import reportWebVitals from './reportWebVitals';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
    // <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
