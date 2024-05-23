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
import FooterLayout from "../components/Footer/FooterLayout";
import DemandeAnnonce from "../Admin/DemandeAnnonce";
import ListDemande from "../Admin/ListDemande";




function Layout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <FooterLayout />
    </div>
  );
}
function Layout2({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
function AccueilLayout({ children }) {
  return (
    <div>
      <Accueil/>
      <AboutUs/>
      <Prestations/>
      <Contact/>
    </div>
  );
}

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
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
      {
        path: "/demande-annonce",
        element: <DemandeAnnonce/>,
      },
      // Annonces
      {
        path: "/add-annonce",
        element: <AddAnnonce/>,
      },
      {
        path: "/annonce-list",
        element: <AnnonceList/>,
      },
      {
        path: "editannonce/:id/edit",
        element: <EditAnnonce/>,
      },
      {
      path: "/list-demandes",
      element: <ListDemande/>,
    },
    ],
  },
  {
    element: <Layout2 />,
    children: [
      {
        path: "/",
        element: <AccueilLayout />,
      },
      {
        path: "/accueil",
        element: <AccueilLayout />,
      },
    ],
  },
  {
    path: "/admin",
    element: <Login/>,
  },
]);
