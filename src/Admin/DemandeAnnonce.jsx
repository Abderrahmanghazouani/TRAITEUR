
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

const DemandeAnnonce = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-8">Bienvenue sur la page d'Admin</h1>
        <div className="space-y-4">
          <Link to="/List-demandes"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg">
            Liste de demandes
          </button>
          </Link>
          
          <Link to="/add-annonce"> {/* Link to the page/component for adding a new announcement */}
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg">
              Ajouter une nouvelle annonce
            </button>
          </Link>

    

          <Link to="/annonce-list"> {/* Link to the page/component with the list of announcements */}
            <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-4 px-8 rounded-lg">
              Liste des annonces
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DemandeAnnonce;
