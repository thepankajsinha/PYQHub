import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { PYQProvider } from './context/PYQContext.jsx';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <PYQProvider>
        <App />
      </PYQProvider>
    </BrowserRouter>
  </StrictMode>
);