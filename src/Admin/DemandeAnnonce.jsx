



const DemandeAnnonce = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-8">Bienvenue sur la page d'Admin</h1>
        <div className="space-y-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg">
            Liste de demandes
          </button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg">
            Ajouter une nouvelle annonce
          </button>
        </div>
      </div>
    </div>
  );
};

export default DemandeAnnonce;
