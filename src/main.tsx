import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/LandingPage';
import './index.css';
import './assets/global.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
