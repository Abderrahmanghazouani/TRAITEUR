import { FaClipboardList, FaPlusCircle, FaListAlt, FaSignOutAlt, FaUserCheck } from 'react-icons/fa';

const DemandeAnnonce = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="text-center p-10 rounded-lg shadow-lg border border-dashed border-black bg-[#e3dac9]">
        <h1 className="text-2xl font-bold mb-6 bg-white border-b-4 border-black font-serif py-2 px-4 flex items-center justify-center rounded-lg">
          <FaUserCheck className="text-3xl mr-2" />
          Bienvenue sur la page d'Administrateur
        </h1>
        <div className="flex flex-col justify-center items-center space-y-4 mt-8">
          <a href="list-demandes">
            <button className="flex items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg m-1 transition duration-300 ease-in-out transform hover:-translate-y-1">
              <FaClipboardList className="mr-3" />
              Liste de demandes
            </button>
          </a>

          <a href="/add-annonce">
            <button className="flex items-center bg-green-500 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg m-1 transition duration-300 ease-in-out transform hover:-translate-y-1">
              <FaPlusCircle className="mr-3" />
              Ajouter une nouvelle annonce
            </button>
          </a>

          <a href="/annonce-list">
            <button className="flex items-center bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-4 px-8 rounded-lg m-1 transition duration-300 ease-in-out transform hover:-translate-y-1">
              <FaListAlt className="mr-3" />
              Liste des annonces
            </button>
          </a>

          <a href="/accueil">
            <button className="flex items-center bg-red-500 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg m-1 transition duration-300 ease-in-out transform hover:-translate-y-1">
              <FaSignOutAlt className="mr-3" />
              Déconnexion
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DemandeAnnonce;
