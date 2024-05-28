import  { useState, useEffect } from 'react';
import axios from 'axios';

const ListDemandes = () => {
    const [demandes, setDemandes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/demandes');
                console.log('Fetched demandes:', response.data);
                setDemandes(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching demandes:', error);
                setError('Error fetching demandes. Please try again later.');
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://127.0.0.1:8000/api/demandes/${id}`);
            setDemandes(demandes.filter(demande => demande.idDemande !== id));
        } catch (error) {
            console.error('Error deleting demande:', error);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-bold mb-4">List of Demandes</h1>
            <ul>
                {demandes.map(demande => (
                    <li key={demande.idDemande} className="border-b py-2">
                        <div>
                            <strong>Client:</strong>
                            <div><strong>Nom:</strong> {demande.client.nom}</div>
                            <div><strong>Email:</strong> {demande.client.email}</div>
                            <div><strong>Numero:</strong> {demande.client.numero}</div>
                        </div>
                        <div>
                            <strong>Type de Celebration:</strong> {demande.type_de_celebration}
                        </div>
                        <div>
                            <strong>Lieu:</strong> {demande.lieu}
                        </div>
                        <div>
                            <strong>Date Creation:</strong> {demande.date_creation}
                        </div>
                        <div>
                            <strong>Nombre Personne:</strong> {demande.nombre_personne}
                        </div>
                        <div>
                            <strong>Description:</strong> {demande.description}
                        </div>
                        <button
                            className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-4 rounded mt-2"
                            onClick={() => handleDelete(demande.idDemande)}
                        >
                            Supprimer
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListDemandes;
