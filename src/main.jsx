import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';

// Retrieve the CSRF token from the meta tag
const csrfTokenMetaTag = document.querySelector('meta[name="csrf-token"]');
if (csrfTokenMetaTag) {
    const csrfToken = csrfTokenMetaTag.getAttribute('content');
    // Log CSRF token to verify
    console.log('CSRF Token:', csrfToken);
    // Set the CSRF token as a default header for all Axios requests
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;
} else {
    console.error('CSRF token meta tag not found.');
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);




// Votre code utilise ReactDOM.createRoot pour créer une racine React dans l'élément avec l'ID "root",
//  puis il utilise la méthode render pour rendre votre composant <App /> dans cet élément.


