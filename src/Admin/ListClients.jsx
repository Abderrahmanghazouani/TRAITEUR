import  { useState, useEffect } from 'react';
import axios from 'axios';

const ListClients = () => {
    const [clients, setClients] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/clients');
            console.log('Fetched clients:', response.data);
            setClients(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching clients:', error);
            setError('Error fetching clients. Please try again later.');
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://127.0.0.1:8000/api/clients/${id}`);
            fetchData(); // Re-fetch clients after successful deletion
        } catch (error) {
            console.error('Error deleting client:', error);
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
            <h1 className="text-2xl font-bold mb-4">List of Clients</h1>
            <ul>
                {clients.map(client => (
                    <li key={client.idClient} className="border-b py-2">
                        <div>
                            <strong>Nom:</strong> {client.nom}
                        </div>
                        <div>
                            <strong>Email:</strong> {client.email}
                        </div>
                        <div>
                            <strong>Numero:</strong> {client.numero}
                        </div>
                        <button
                            className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-4 rounded mt-2"
                            onClick={() => handleDelete(client.idClient)}
                        >
                            Supprimer
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListClients;
