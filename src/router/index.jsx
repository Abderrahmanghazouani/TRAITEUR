import { createBrowserRouter } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Accueil from "../components/Accueil/Accueil";
import Nous from "../components/AboutUs/Nous";
import AboutUs from "../components/AboutUs/AboutUs";
import Prestations from "../components/Prestations/Prestations";
import Contact from "../components/Contact/Contact";
import Annonce from "../components/Annonce/Annonce";
import Footer from "../components/Footer/Footer";
import Login from "../Admin/Login";
import Traiteur from "../serviceDetails/Traiteur";

function AccueilLayout({ children }) {
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
    element: <Navbar />,
    children: [
      {
        path: "/",
        element: <AccueilLayout />,
      },
      {
        path: "/accueil",
        element: <AccueilLayout />,
      },
      {
        path: "/services",
        element: <Prestations />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about-us",
        element: <Nous/>,
      },
      {
        path: "/annonce",
        element: <Annonce />,
      },
      {
        path: "/traiteur",
        element: <Traiteur/>,
      },
    ],
  },
  {
    path: "/admin",
    element: <Login/>,
  },
]);
