import React from 'react';
import ReactDOM from 'react-dom/client';

// Import CSS react-slick para slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import App from './App';
import { AuthProvider } from './context/SesionAuthContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
