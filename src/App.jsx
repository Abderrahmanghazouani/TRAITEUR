// eslint-disable-next-line no-unused-vars
import React from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import { RouterProvider } from "react-router-dom";
import { router } from "./router/index.jsx";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Accueil from "./components/Accueil/Accueil.jsx";


// import Login from "./Admin/Login.jsx";
// import DemandeAnnonce from "./Admin/DemandeAnnonce.jsx";
// import AddAnnoce from "./Admin/AddAnnoce.jsx";




const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return( 
      <>
      <RouterProvider router={router} /> 
      <Router>
            <Routes>
                {/* <Route path="/login" element={<Login/>} /> */}
                <Route path="/accueil" element={<Accueil/>} />
                {/* Add other routes here */}
            </Routes>
        </Router> 

    </>
  );

};

export default App;