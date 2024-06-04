import { createBrowserRouter } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Accueil from "../components/Accueil/Accueil";
import Nous from "../components/AboutUs/Nous";
import AboutUs from "../components/AboutUs/AboutUs";
import Prestations from "../components/Prestations/Prestations";
import Contact from "../components/Contact/Contact";
import Annonce from "../components/Annonce/Annonce";
import Footer from "../components/Footer/Footer";
import FooterLayout from "../components/Footer/FooterLayout";
import Login from "../Admin/Login";
import Traiteur from "../serviceDetails/traiteur/Traiteur";
import DemandeAnnonce from "../Admin/DemandeAnnonce";
import ListDemande from "../Admin/Demandes/ListDemandes";
import AddAnnonce from "../Admin/Annonce/AddAnnoce";
import EditAnnonce  from "../Admin/Annonce/EditAnnonce";
import AnnonceList from "../Admin/Annonce/AnnonceList";
import Autre from "../serviceDetails/Autre";
import Table from "../serviceDetails/Table";
import Amengement from "../serviceDetails/Amenagment";
import Florale from "../serviceDetails/Decoration";
import PlatS from "../serviceDetails/traiteur/traiteurDetails/platS";
import PlatM from "../serviceDetails/traiteur/traiteurDetails/platM";
import Buffet from "../serviceDetails/traiteur/traiteurDetails/buffet";
import Patisserie from "../serviceDetails/patisserie/Ptisserie";
import PatisserieDesserts from "../serviceDetails/patisserie/patisserie1";
import PieceMontee from "../serviceDetails/patisserie/pieceMonte";



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
        path: "/nous-details",
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
        path: "/traiteur/plats-marocains",
        element: <PlatM/>,
      },
      {
        path: "/traiteur/plas-sales",
        element: <PlatS/>,
      },
      {
        path: "/traiteur/buffet",
        element: <Buffet/>,
      },
      {
        path: "/patisserie",
        element: <Patisserie/>,  
      },
      {
        path: "/patisserie/patisseries-marocains-desserts",
        element: <PatisserieDesserts/>,
      },
      {
        path: "//patisserie/pieces-montees",
        element: <PieceMontee/>,
      },
      {
       path: "/autres-services",
       element: <Autre/>,
      },
      {
       path: "/art-de-la-table",
       element: <Table/>,
      },
      {
       path: "/amenagment",
       element: <Amengement/>,    
      },
      {
       path: "/decoration-florale",
       element: <Florale/>,    
      },
      // Annonces
      {
        path: "/demande-annonce",
        element: <DemandeAnnonce/>,
      },
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
