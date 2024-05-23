import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddAnnonce from "./Admin/Annonce/AddAnnoce.jsx";
import AnnonceList from "./Admin/Annonce/AnnonceList.jsx";
import DemandeAnnonce from "./Admin/DemandeAnnonce.jsx";
import EditAnnonce from "./Admin/Annonce/EditAnnonce.jsx";

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

  return (
    <>
      <Router>
      <DemandeAnnonce/>
      <AddAnnonce/>
      <EditAnnonce/>
      <AnnonceList/>
          <Routes>
          <Route path="/add-annonce" component={AddAnnonce} />
          <Route path="/annonce-list" component={AnnonceList} />
          <Route path="/editannonce/:id/edit" component={EditAnnonce} />
          </Routes>
      </Router>
    </>
  );
};

export default App;
