import './global.css';

import ReactDOM from 'react-dom/client';
import { Suspense, StrictMode } from 'react';

import App from './app';

// ----------------------------------------------------------------------

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <Suspense>
      <App />
    </Suspense>
  </StrictMode>
);
