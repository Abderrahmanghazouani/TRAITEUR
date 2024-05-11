import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import pic3 from "../../assets/pic-5.jpg"

const ContactPage = () => {
  return (
    <div
    className=" bg-cover bg-center"
    style={{ backgroundImage: `url(${pic3})` }}
  >
    <div className="container mx-auto px-4 py-8">
      {/* Informations de contact */}
      <div className="mb-8">
        <h1 className="text-5xl font-bold mb-4 text-yellow-500 text-center">Contactez-nous</h1>
        <p className="mb-4 text-black text-center text-2xl font-bold ">
          Pour toute demande, n’hésitez pas à compléter le formulaire ci-dessous. Nous vous répondrons dans les meilleurs délais.
        </p>
      </div>

      {/* Liens de contact */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Première colonne */}
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

        {/* Deuxième colonne */}
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

      {/* Formulaire de contact */}
      <div className="mt-8">
        {/* <h1 className="text-3xl font-bold mb-4 text-black text-center ">Formulaire de demande </h1> */}
        <form className="grid grid-cols-2 gap-8">
  {/* Champ Prénom */}
  <div>
    <label htmlFor="firstName" className="block   text-xl text-black font-bold">
      Prénom :
    </label>
    <input
      type="text"
      id="firstName"
      name="firstName"
      className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-yellow-400 focus:border-yellow-400"
      required
      placeholder="Votre prénom"
    />
  </div>

  {/* Champ Nom */}
  <div>
    <label htmlFor="lastName" className="block font-bold text-xl text-black">
      Nom :
    </label>
    <input
      type="text"
      id="lastName"
      name="lastName"
      className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-yellow-400 focus:border-yellow-400"
      required
      placeholder="Votre nom"
    />
  </div>

  {/* Champ Numéro de téléphone */}
  <div>
    <label htmlFor="phone" className="block font-bold text-xl text-black">
      Numéro de téléphone :
    </label>
    <input
      type="tel"
      id="phone"
      name="phone"
      className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-yellow-400 focus:border-yellow-400"
      required
      placeholder="Votre numéro de téléphone"
    />
  </div>

  {/* Champ Email */}
  <div>
    <label htmlFor="email" className="block text-xl text-black font-bold ">
      Email :
    </label>
    <input
      type="email"
      id="email"
      name="email"
      className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-yellow-400 focus:border-yellow-400"
      required
      placeholder="Votre adresse email"
    />
  </div>

  {/* Champ Type de célébration */}
  <div>
    <label htmlFor="celebrationType" className="block  font-bold text-xl text-black">
      Type de célébration :
    </label>
    <select
      id="celebrationType"
      name="celebrationType"
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

  {/* Champ Date */}
  <div>
    <label htmlFor="date" className="block  font-bold text-xl text-black">
      Date :
    </label>
    <input
      type="date"
      id="date"
      name="date"
      className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-yellow-400 focus:border-yellow-400"
      required
    />
  </div>

  {/* Champ Lieu */}
  <div>
    <label htmlFor="location" className="block font-bold text-xl text-black">
      Lieu :
    </label>
    <input
      type="text"
      id="location"
      name="location"
      className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-yellow-400 focus:border-yellow-400"
      required
      placeholder="Adresse du lieu"
    />
  </div>

  {/* Champ Nombre de personnes */}
  <div>
    <label htmlFor="numberOfPeople" className="block  font-bold text-xl text-black">
      Nombre de personnes :
    </label>
    <input
      type="number"
      id="numberOfPeople"
      name="numberOfPeople"
      className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-yellow-400 focus:border-yellow-400"
      required
      placeholder="Nombre de personnes"
    />
  </div>

  {/* Champ Description */}
  <div className="col-span-2">
    <label htmlFor="description" className="block font-bold text-xl text-black">
      Description :
    </label>
    <textarea
      id="description"
      name="description"
      rows="4"
      className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-yellow-400 focus:border-yellow-400"
      required
      placeholder="Décrivez votre demande"
    ></textarea>
  </div>

  {/* Bouton Envoyer */}
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
