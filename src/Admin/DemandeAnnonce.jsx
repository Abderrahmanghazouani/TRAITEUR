

const DemandeAnnonce = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-8">Bienvenue sur la page d'Admin</h1>
        <div className="space-y-4">
 
          <a href="list-demandes">
         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg m-1">
            Liste de demandes
          </button>
          </a>

          <a href="list-clients">
         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg ">
            Liste de clients
          </button>
          </a>
          

          <a href="/add-annonce"> {/* Link to the page/component for adding a new announcement */}
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg">
              Ajouter une nouvelle annonce
            </button>
          </a>

          <a href="/annonce-list"> {/* Link to the page/component with the list of announcements */}
            <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-4 px-8 rounded-lg">
              Liste des annonces
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DemandeAnnonce;
