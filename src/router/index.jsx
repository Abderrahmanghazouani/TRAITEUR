import {createBrowserRouter } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import AboutUs from "../components/AboutUs/AboutUs";
import Accueil from "../components/Accueil/Accueil";
import Prestations from "../components/Prestations/Prestations"
import Contact from "../components/Contact/Contact";
import Annonce from "../components/Annonce/Annonce";
import Footer from "../components/Footer/Footer";


function AccueilLayout() {
    return (
      <div>
        <Accueil/>
        <AboutUs/>
        <Prestations/>
        <Contact/>
        <Footer/>
      </div>
    );
  }


export const router = createBrowserRouter([
    {
    element:<Navbar/>,
    children:[

        {
           path:'/accueil',
           element:<AccueilLayout/>,
        },
         
        {
           path:'/services',
           element: <Prestations/>,
        },
         
        {
           path:'/contact',
           element: <Contact/>,
        },
         
        {
           path:'/about-us',
           element: <AboutUs/>,
        },
         
        {
           path:'/annonce',
           element: <Annonce/>,
        },
    
         
 ] }
]);
