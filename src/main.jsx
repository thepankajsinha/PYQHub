import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { PYQProvider } from './context/PYQContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PYQProvider>
      <App />
    </PYQProvider>
  </StrictMode>
);