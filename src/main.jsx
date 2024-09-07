import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct import
import App from './App.jsx';
import './index.css';
import { ThemeProvider } from './common/ThemeContext.jsx';

// Create the root and render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);