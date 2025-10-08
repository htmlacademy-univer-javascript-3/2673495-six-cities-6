import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const placesCount : number = 5;
root.render(
  <React.StrictMode>
    <App placesCount={placesCount}></App>
  </React.StrictMode>
);
