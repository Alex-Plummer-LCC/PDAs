// Import React, the ReactDOM (which assists with displaying the app on the page), and the App component.
import React from 'react';
import ReactDOM  from 'react-dom/client';
import App from './App';

// Find the root, and give React control of it.
const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

// Render the application.
root.render(<App />);