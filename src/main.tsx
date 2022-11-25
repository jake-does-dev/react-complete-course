import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppExpenseTracker from './AppExpenseTracker';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <App />*/}
    <AppExpenseTracker />
  </React.StrictMode>,
);
