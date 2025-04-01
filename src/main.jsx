import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom'; // Use HashRouter instead of BrowserRouter
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router> {/* Wrap with HashRouter instead of BrowserRouter */}
      <App />
    </Router>
  </StrictMode>,
);