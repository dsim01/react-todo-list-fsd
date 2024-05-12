import { createRoot } from 'react-dom/client';
import App from './app.tsx';
import { StrictMode } from 'react';

createRoot(document.querySelector('#root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
