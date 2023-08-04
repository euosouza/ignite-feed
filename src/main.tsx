import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

import './assets/styles/common/reset.scss';
import './assets/styles/common/global.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
