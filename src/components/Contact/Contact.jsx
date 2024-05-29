import axios from "axios";
import { useState, useEffect } from "react";
import { FaWhatsapp, FaInstagram, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    nom: "",
    numero: "",
    email: "",
    description: "",
    lieu: "",
    date_creation: "",
    nombre_personne: "",
    type_de_celebration: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [demandeSent, setDemandeSent] = useState(false);
  const [csrfToken, setCsrfToken] = useState("");

  useEffect(() => {
    // Fetch CSRF token from server
    const fetchCsrfToken = async () => {
      try {
        const response = await axios.get("/api/csrf-token");
        setCsrfToken(response.data.csrfToken);
      } catch (error) {
        console.error("Error fetching CSRF token:", error);
      }
    };

    fetchCsrfToken();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setDemandeSent(false);

    try {
      // Check if the client exists or create a new one
      const clientResponse = await axios.post(
        "http://127.0.0.1:8000/api/clients",
        {
          nom: formData.nom,
          numero: formData.numero,
          email: formData.email,
        },
        {
          headers: {
            "X-CSRF-TOKEN": csrfToken, // Include CSRF token in the request headers
          },
        }
      );

      const clientId = clientResponse.data.client.idClient; // Adjust based on actual response structure

      // Create the demande
      const demandeResponse = await axios.post(
        "http://127.0.0.1:8000/api/demandes",
        {
          client_id: clientId,
          description: formData.description,
          lieu: formData.lieu,
          date_creation: formData.date_creation,
          nombre_personne: formData.nombre_personne,
          type_de_celebration: formData.type_de_celebration,
        },
        {
          headers: {
            "X-CSRF-TOKEN": csrfToken, // Include CSRF token in the request headers
          },
        }
      );

      console.log("Demande créée avec succès:", demandeResponse.data);

      // Reset form data
      setFormData({
        nom: "",
        numero: "",
        email: "",
        description: "",
        lieu: "",
        date_creation: "",
        nombre_personne: "",
        type_de_celebration: "",
      });

      // Set demandeSent to true to display the message
      setDemandeSent(true);
    } catch (error) {
      console.error("Erreur lors de la création de la demande:", error);
      if (error.response) {
        setError(
          error.response.data.message ||
          "Une erreur est survenue. Veuillez réessayer."
        );
      } else if (error.request) {
        setError("Aucune réponse du serveur. Veuillez réessayer.");
      } else {
        setError("Une erreur est survenue. Veuillez réessayer.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-cover bg-center bg-gray">
      <div className="container mx-auto px-4 py-8">
        {/* Contact information section */}
        <div className="mt-8 grid grid-cols-2 gap-8 mb-3">
          <div className="border border-[#FF9F01] rounded-lg p-4 flex flex-col items-center justify-center">
            <div className="flex items-center text-xl text-black">
              <FaWhatsapp className="mr-2 text-green-500" />
              <a
                href="https://wa.me/yourphonenumber"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                WhatsApp
              </a>
            </div>
          </div>
          <div className="border border-[#FF9F01] rounded-lg p-4 flex flex-col items-center justify-center">
            <div className="flex items-center text-xl text-black">
              <FaInstagram className="mr-2 text-pink-500" />
              <a
                href="https://www.instagram.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Instagram
              </a>
            </div>
          </div>
          <div className="border border-[#FF9F01] rounded-lg p-4 flex flex-col items-center justify-center">
            <div className="flex items-center text-xl text-black">
              <FaEnvelope className="mr-2 mb-1 text-yellow-500" />{" "}
              {/* Added margin bottom here */}
              <a
                href="mailto:youremail@example.com"
                className="hover:underline"
              >
                youremail@example.com
              </a>
            </div>
          </div>

          <div className="border border-[#FF9F01] rounded-lg p-4 flex flex-col items-center justify-center">
            <div className="flex items-center text-xl text-black">
              <FaMapMarkerAlt className="mr-2 text-red-500" />
              <span>Adresse: 123 Your Street, Your City, Your Country</span>
            </div>
          </div>
        </div>

        <form className="grid grid-cols-2 gap-8" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="nom" className="block text-xl text-black font-bold">
              Nom :
            </label>
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
            <label
              htmlFor="numero"
              className="block text-xl text-black font-bold"
            >
              Numéro de téléphone :
            </label>
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
            <label
              htmlFor="email"
              className="block text-xl text-black font-bold"
            >
              Email :
            </label>
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
            <label
              htmlFor="type_de_celebration"
              className="block text-xl text-black font-bold"
            >
              Type de célébration :
            </label>
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
            <label
              htmlFor="date_creation"
              className="block text-xl text-black font-bold"
            >
              Date :
            </label>
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
            <label
              htmlFor="lieu"
              className="block text-xl text-black font-bold"
            >
              Lieu :
            </label>
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
            <label
              htmlFor="nombre_personne"
              className="block text-xl text-black font-bold"
            >
              Nombre de personnes :
            </label>
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

          <div>
            <label
              htmlFor="description"
              className="block text-xl text-black font-bold"
            >
              Description :
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-yellow-400 focus:border-yellow-400"
              required
            ></textarea>
          </div>

          <div className="col-span-2">
            <button
              type="submit"
              className="w-full bg-yellow-500 text-white text-xl font-bold p-4 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              disabled={loading}
            >
              {loading ? "Envoi en cours..." : "Envoyer"}
            </button>
            {error && (
              <div className="mt-4 text-red-500 text-center">{error}</div>
            )}
            {demandeSent && (
              <div className="mt-4 text-green-500 text-center">
                Votre demande a été envoyée avec succès.
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
