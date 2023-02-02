import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/scss/main.scss'
import { StoreProvider } from './context/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StoreProvider>
    <App />
  </StoreProvider>
);

