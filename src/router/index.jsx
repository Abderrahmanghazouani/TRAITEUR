import React, { Suspense, lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import FooterLayout from '../components/Footer/FooterLayout';
import Login from '../Admin/Login';

// Lazy-loaded components
const Accueil = lazy(() => import('../components/Accueil/Accueil'));
const Nous = lazy(() => import('../components/AboutUs/Nous'));
const AboutUs = lazy(() => import('../components/AboutUs/AboutUs'));
const Prestations = lazy(() => import('../components/Prestations/Prestations'));
const Contact = lazy(() => import('../components/Contact/Contact'));
const Annonce = lazy(() => import('../components/Annonce/Annonce'));
const Traiteur = lazy(() => import('../serviceDetails/traiteur/Traiteur'));
const DemandeAnnonce = lazy(() => import('../Admin/DemandeAnnonce'));
const ListDemande = lazy(() => import('../Admin/Demandes/ListDemandes'));
const AddAnnonce = lazy(() => import('../Admin/Annonce/AddAnnoce'));
const EditAnnonce = lazy(() => import('../Admin/Annonce/EditAnnonce'));
const AnnonceList = lazy(() => import('../Admin/Annonce/AnnonceList'));
const Autre = lazy(() => import('../serviceDetails/Autre'));
const Table = lazy(() => import('../serviceDetails/Table'));
const Amengement = lazy(() => import('../serviceDetails/Amenagment'));
const Florale = lazy(() => import('../serviceDetails/Decoration'));
const PlatS = lazy(() => import('../serviceDetails/traiteur/traiteurDetails/platS'));
const PlatM = lazy(() => import('../serviceDetails/traiteur/traiteurDetails/platM'));
const Buffet = lazy(() => import('../serviceDetails/traiteur/traiteurDetails/buffet'));
const Patisserie = lazy(() => import('../serviceDetails/patisserie/Ptisserie'));
const PatisserieDesserts = lazy(() => import('../serviceDetails/patisserie/patisserie1'));
const PieceMontee = lazy(() => import('../serviceDetails/patisserie/pieceMonte'));

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

function Layout3({ children }) {
  return (
    <div>
      <Navbar />
      {children}

    </div>
  );
}


const AccueilLayout = () => (
  <div>
    <Accueil />
    <AboutUs />
    <Prestations />
    <Contact />
  </div>
);

const LazyAccueilLayout = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <AccueilLayout />
  </Suspense>
);

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/services',
        element: <Prestations />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/about-us',
        element: <Nous />,
      },
      {
        path: '/nous-details',
        element: <Nous />,
      },
    ],
  },
  {
    element: <Layout3 />,
    children: [
      {
        path: '/annonce',
        element: <Annonce />,
      },
      {
        path: '/traiteur',
        element: <Traiteur />,
      },
      {
        path: '/traiteur/plats-marocains',
        element: <PlatM />,
      },
      {
        path: '/traiteur/plas-sales',
        element: <PlatS />,
      },
      {
        path: '/traiteur/buffet',
        element: <Buffet />,
      },
      {
        path: '/patisserie',
        element: <Patisserie />,
      },
      {
        path: '/patisserie/patisseries-marocains-desserts',
        element: <PatisserieDesserts />,
      },
      {
        path: '/patisserie/pieces-montees',
        element: <PieceMontee />,
      },
      {
        path: '/autres-services',
        element: <Autre />,
      },
      {
        path: '/art-de-la-table',
        element: <Table />,
      },
      {
        path: '/amenagement',
        element: <Amengement />,
      },
      {
        path: '/decoration-florale',
        element: <Florale />,
      },
      {
        path: '/demande-annonce',
        element: <DemandeAnnonce />,
      },
      {
        path: '/add-annonce',
        element: <AddAnnonce />,
      },
      {
        path: '/annonce-list',
        element: <AnnonceList />,
      },
      {
        path: 'editannonce/:id/edit',
        element: <EditAnnonce />,
      },
      {
        path: '/list-demandes',
        element: <ListDemande />,
      },
    ],
  },
  {
    element: <Layout2 />,
    children: [
      {
        path: '/',
        element: <LazyAccueilLayout />,
      },
      {
        path: '/accueil',
        element: <LazyAccueilLayout />,
      },
      {
        path: '*',
        element: <LazyAccueilLayout />,
      },
    ],
  },
  {
    path: '/admin',
    element: <Login />,
  },
]);
