import { useState, useEffect } from 'react';
import axios from 'axios';

const ListDemandes = () => {
    const [demandes, setDemandes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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

    useEffect(() => {
        fetchData();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://127.0.0.1:8000/api/demandes/${id}`);
            fetchData(); // Re-fetch demandes after successful deletion
        } catch (error) {
            console.error('Error deleting demande:', error);
        }
    };

    if (loading) {
        return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
    }

    if (error) {
        return <div className="flex items-center justify-center min-h-screen text-red-500">{error}</div>;
    }

    return (
        <div className="container mx-auto mt-10 p-6 bg-white shadow-md rounded-lg border border-bold border-primary ">
            <h1 className="text-3xl font-extrabold mb-6 text-center font-serif  bg-primary border border-black ">Liste des demandes</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-black border-double ">
                    <thead className="bg-[#e3dac9] font-mono font-bold">
                        <tr>
                            <th className="py-2 px-4 border-b border-r">Client Nom</th>
                            <th className="py-2 px-4 border-b border-r">Email</th>
                            <th className="py-2 px-4 border-b border-r">Numero</th>
                            <th className="py-2 px-4 border-b border-r">Type de Celebration</th>
                            <th className="py-2 px-4 border-b border-r">Lieu</th>
                            <th className="py-2 px-4 border-b border-r">Date Creation</th>
                            <th className="py-2 px-4 border-b border-r">Nombre Personne</th>
                            <th className="py-2 px-4 border-b border-r">Description</th>
                            <th className="py-2 px-4 border-b">Actions</th>
                        </tr>
                    </thead>
                    <tbody className='bg-gray-100 font-serif'>
                        {demandes.map(demande => (
                            <tr key={demande.idDemande}>
                                <td className="py-2 px-4 border-b border-r">{demande.client.nom}</td>
                                <td className="py-2 px-4 border-b border-r">{demande.client.email}</td>
                                <td className="py-2 px-4 border-b border-r">{demande.client.numero}</td>
                                <td className="py-2 px-4 border-b border-r">{demande.type_de_celebration}</td>
                                <td className="py-2 px-4 border-b border-r">{demande.lieu}</td>
                                <td className="py-2 px-4 border-b border-r">{demande.date_creation}</td>
                                <td className="py-2 px-4 border-b border-r">{demande.nombre_personne}</td>
                                <td className="py-2 px-4 border-b border-r">{demande.description}</td>
                                <td className="py-2 px-4 border-b">
                                    <button
                                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-4 rounded-lg font-mono"
                                        onClick={() => handleDelete(demande.idDemande)}
                                    >
                                        Supprimer
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ListDemandes;
