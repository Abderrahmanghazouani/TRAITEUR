import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const ContactPage = () => {
    const [formData, setFormData] = useState({
        nom: '',
        numero: '',
        email: '',
        description: '',
        lieu: '',
        date_creation: '',
        nombre_personne: '',
        type_de_celebration: ''
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [demandeSent, setDemandeSent] = useState(false); // Declared here

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            // Create or fetch the client
            let clientId = null;
            const clientResponse = await axios.post('http://127.0.0.1:8000/api/clients', {
                nom: formData.nom,
                numero: formData.numero,
                email: formData.email
            });
            
            if (clientResponse.data && clientResponse.data.idClient) {
                clientId = clientResponse.data.idClient;
            } else {
                throw new Error('Client ID not found in the response');
            }

            // Create the demande
            const demandeResponse = await axios.post('http://127.0.0.1:8000/api/demandes', {
                client_id: clientId,
                description: formData.description,
                lieu: formData.lieu,
                date_creation: formData.date_creation,
                nombre_personne: formData.nombre_personne,
                type_de_celebration: formData.type_de_celebration
            });

            console.log('Demande créée avec succès:', demandeResponse.data);

            // Reset form data
            setFormData({
                nom: '',
                numero: '',
                email: '',
                description: '',
                lieu: '',
                date_creation: '',
                nombre_personne: '',
                type_de_celebration: ''
            });

            // Set demandeSent to true to display the message
            setDemandeSent(true);

        } catch (error) {
            console.error('Erreur lors de la création de la demande:', error);
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                setError(error.response.data.message || 'Une erreur est survenue. Veuillez réessayer.');
            } else if (error.request) {
                // The request was made but no response was received
                setError('Aucune réponse du serveur. Veuillez réessayer.');
            } else {
                // Something happened in setting up the request that triggered an Error
                setError('Une erreur est survenue. Veuillez réessayer.');
            }
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className="bg-cover bg-center bg-gray">
            <div className="container mx-auto px-4 py-8">
                <form className="grid grid-cols-2 gap-8" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="nom" className="block text-xl text-black font-bold">Nom :</label>
                        <input
                            type="text"
                            id="nom"
                            name="nom"
                            value={formData.nom}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-yellow-400 focus:border-yellow-400"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="numero" className="block text-xl text-black font-bold">Numéro de téléphone :</label>
                        <input
                            type="tel"
                            id="numero"
                            name="numero"
                            value={formData.numero}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-yellow-400 focus:border-yellow-400"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-xl text-black font-bold">Email :</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-yellow-400 focus:border-yellow-400"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="type_de_celebration" className="block text-xl text-black font-bold">Type de célébration :</label>
                        <select
                            id="type_de_celebration"
                            name="type_de_celebration"
                            value={formData.type_de_celebration}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-yellow-400 focus:border-yellow-400"
                            required
                        >
                            <option value="">Sélectionner un type de célébration</option>
                            <option value="Mariage">Mariage</option>
                            <option value="Anniversaire">Anniversaire</option>
                            <option value="Réunion">Réunion</option>
                            <option value="Autre">Autre</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="date_creation" className="block text-xl text-black font-bold">Date :</label>
                        <input
                            type="date"
                            id="date_creation"
                            name="date_creation"
                            value={formData.date_creation}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-yellow-400 focus:border-yellow-400"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="lieu" className="block text-xl text-black font-bold">Lieu :</label>
                        <input
                            type="text"
                            id="lieu"
                            name="lieu"
                            value={formData.lieu}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-yellow-400 focus:border-yellow-400"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="nombre_personne" className="block text-xl text-black font-bold">Nombre de personnes :</label>
                        <input
                            type="number"
                            id="nombre_personne"
                            name="nombre_personne"
                            value={formData.nombre_personne}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-yellow-400 focus:border-yellow-400"
                            required
                        />
                    </div>

                    <div className="col-span-2">
                        <label htmlFor="description" className="block text-xl text-black font-bold">Description :</label>
                        <textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            rows="4"
                            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-yellow-400 focus:border-yellow-400"
                            required
                        ></textarea>
                    </div>

                    <div className="col-span-2">
                        <button
                            type="submit"
                            className="w-full bg-yellow-500 text-white py-2 rounded-md font-bold hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600"
                            disabled={loading}
                        >
                            {loading ? 'Envoi en cours...' : 'Envoyer'}
                        </button>
                    </div>
                    {error && <div className="col-span-2 text-red-500">{error}</div>}
                    {/* Display the message if demandeSent is true */}
                    {demandeSent && (
                        <div className="col-span-2 text-green-500">Demande envoyée, merci pour votre confiance.</div>
                    )}
                </form>
            </div>
        </div>
    );
};

export default ContactPage;
