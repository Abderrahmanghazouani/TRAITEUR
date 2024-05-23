import { useState, useEffect } from 'react';
import { AxiosAdmin } from '../api/axios';

const ListDemande = () => {
  const [demandes, setDemandes] = useState([]);

  useEffect(() => {
    const fetchDemandes = async () => {
      try {
        const response = await AxiosAdmin.get('/demandes');
        setDemandes(response.data.demandes);
      } catch (error) {
        console.error('Erreur lors de la récupération des demandes:', error);
      }
    };

    fetchDemandes();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-5xl font-bold mb-4 text-yellow-500 text-center">Liste des demandes</h1>
      <div className="grid grid-cols-1 gap-8">
        {demandes.map(demande => (
          <div key={demande.id} className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold">{demande.titre}</h2>
            <p><strong>Description:</strong> {demande.description}</p>
            <p><strong>Lieu:</strong> {demande.lieu}</p>
            <p><strong>Date:</strong> {new Date(demande.date_creation).toLocaleDateString()}</p>
            <p><strong>Nombre de personnes:</strong> {demande.nombre_personne}</p>
            <p><strong>Type de célébration:</strong> {demande.type_de_celebration}</p>
            {/* Affichage des informations du client */}
            <div>
              <h3 className="text-xl font-semibold mt-4 mb-2">Informations du client</h3>
              <p><strong>Nom:</strong> {demande.client.nom}</p>
              <p><strong>Numéro de téléphone:</strong> {demande.client.numero}</p>
              <p><strong>Email:</strong> {demande.client.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListDemande;
