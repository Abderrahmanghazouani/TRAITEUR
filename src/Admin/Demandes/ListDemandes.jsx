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
                console.log('Fetched demandes:', response.data); // Add this line for debugging
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
            await axios.delete(`/api/demandes/${id}`);
            setDemandes(demandes.filter(demande => demande.id !== id));
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
                    <li key={demande.id} className="border-b py-2">
                        <div>
                            <strong>Id:</strong> {demande.id}
                        </div>
                        <div>
                            <strong>Name:</strong> {demande.name}
                        </div>
                        <div>
                            <strong>Description:</strong> {demande.description}
                        </div>
                        <button
                            className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-4 rounded mt-2"
                            onClick={() => handleDelete(demande.id)}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListDemandes;
