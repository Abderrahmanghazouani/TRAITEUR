import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import pic3 from "../../assets/pic-5.jpg";
import { AxiosAdmin } from '../../api/axios';

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

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const clientResponse = await AxiosAdmin.post('/api/clients', {
        nom: formData.nom,
        numero: formData.numero,
        email: formData.email
      });

      const clientId = clientResponse.data.client.id;

      const requestData = {
        client_id: clientId,
        description: formData.description,
        lieu: formData.lieu,
        date_creation: formData.date_creation,
        nombre_personne: formData.nombre_personne,
        type_de_celebration: formData.type_de_celebration
      };

      const demandeResponse = await AxiosAdmin.post('/api/demandes', requestData);

      console.log('Demande créée avec succès:', demandeResponse.data);

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

      navigate('/list-demandes'); // Redirection vers la liste des demandes
    } catch (error) {
      console.error('Erreur lors de la création de la demande:', error);
    }
  };

  return (
    <div
      className="bg-cover bg-center bg-gray"
      // style={{ backgroundImage: `url(${pic3})` }}
    >
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className=" font-mono text-5xl font-bold mb-4 text-yellow-500 text-center">Contactez-nous</h1>
          <p className="mb-4 text-black text-center text-2xl font-bold font-serif">
            Pour toute demande, n’hésitez pas à compléter le formulaire ci-dessous. Nous vous répondrons dans les meilleurs délais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <a
              href="https://www.instagram.com/YOUR_INSTAGRAM_USERNAME/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-white hover:text-pink-600 hover:bg-gray-100 p-4 rounded-lg shadow-md transition duration-300 border border-yellow-500"
            >
              <FaInstagram className="text-xl" />
              <span className="ml-2">Instagram</span>
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=YOUR_PHONE_NUMBER"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-white hover:text-green-600 hover:bg-gray-100 p-4 rounded-lg shadow-md transition duration-300 border border-yellow-500"
            >
              <FaWhatsapp className="text-xl" />
              <span className="ml-2">WhatsApp</span>
            </a>
          </div>

          <div>
            <a
              href="mailto:contact@rahalmaitretraiteur.com"
              className="flex items-center justify-center bg-white hover:text-gray-900 hover:bg-gray-100 p-4 rounded-lg shadow-md transition duration-300 border border-yellow-500"
            >
              <MdEmail className="text-xl" />
              <span className="ml-2">contact@rahalmaitretraiteur.com</span>
            </a>
            <a
              href="https://www.google.com/maps/place/50+rue+Normandie+Maarif+20060,+Casablanca"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-white hover:text-gray-900 hover:bg-gray-100 p-4 rounded-lg shadow-md transition duration-300 border border-yellow-500"
            >
              <FaLocationDot className="text-xl" />
              <span className="ml-2">50 rue Normandie Maarif 20060, Casablanca</span>
            </a>
          </div>
        </div>

        <div className="mt-8">
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
                placeholder="Votre nom"
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
                placeholder="Votre numéro de téléphone"
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
                placeholder="Votre adresse email"
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
                placeholder="Adresse du lieu"
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
                placeholder="Nombre de personnes"
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
                placeholder="Décrivez votre demande"
              ></textarea>
            </div>

            <div className="col-span-2">
              <button
                type="submit"
                className="w-full bg-yellow-500 text-white py-2 rounded-md font-bold hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600"
              >
                Envoyer
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
