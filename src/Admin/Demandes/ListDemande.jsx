import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AxiosAdmin } from '../../api/axios';

const DemandList = () => {
  const [demandes, setDemandes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDemandes = async () => {
      try {
        const response = await AxiosAdmin.get('/api/demandes');
        setDemandes(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des demandes:', error);
        setError('Erreur lors de la récupération des demandes.');
      } finally {
        setLoading(false);
      }
    };

    fetchDemandes();
  }, []);

  const handleDeleteDemande = async (idDemande) => {
    try {
      await AxiosAdmin.delete(`/api/demandes/${idDemande}`);
      setDemandes(demandes.filter((demande) => demande.idDemande !== idDemande));
    } catch (error) {
      console.error('Erreur lors de la suppression de la demande:', error);
      setError('Erreur lors de la suppression de la demande.');
    }
  };

  if (loading) {
    return <p className="text-center">Chargement...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <div className="max-w-2xl mx-auto p-4" style={{ backgroundColor: '#E3DAC9' }}>
      <h1 className="text-[#902813] text-2xl font-bold mb-4">Liste des Demandes</h1>
      <ul className="space-y-4">
        {demandes.map((demande) => (
          <li key={demande.idDemande}>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold">
                <Link
                  to={`/demande/${demande.idDemande}`}
                  className="text-[#902813] hover:text-[#FFB917] hover:underline"
                >
                  {demande.idDemande}
                </Link>
              </h2>
              <p className="text-gray-600">{demande.description}</p>
              <button
                onClick={() => handleDeleteDemande(demande.idDemande)}
                className="text-sm text-white bg-red-500 hover:bg-red-600 py-2 px-4 rounded mt-2"
              >
                Supprimer
              </button>
            </div>
            {demande.idDemande !== demandes[demandes.length - 1].idDemande && (
              <hr className="my-3" style={{ borderColor: '#FFB917' }} />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DemandList;
  