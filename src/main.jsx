import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <App />
  
  
  </React.StrictMode>,
)


// Votre code utilise ReactDOM.createRoot pour créer une racine React dans l'élément avec l'ID "root",
//  puis il utilise la méthode render pour rendre votre composant <App /> dans cet élément.


