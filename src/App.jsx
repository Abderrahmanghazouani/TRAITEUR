// eslint-disable-next-line no-unused-vars
import React from "react";
// import Navbar from "./Navbar/Navbar";
// import Accueil from "./components/Accueil/Accueil";
// import AboutUs from "./components/AboutUs/AboutUs";
import AOS from "aos";
import "aos/dist/aos.css";
// import Footer from "./components/Footer/Footer";
// import Anonce from "./components/Annonce/Annonce";
// import Contact from "./components/Contact/Contact";
import Demandes from "./components/Demande/Demandes";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/index.jsx";


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
      <Demandes/>
    </>
  );

};

export default App;