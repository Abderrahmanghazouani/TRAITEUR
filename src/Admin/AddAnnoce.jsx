


const AddAnnonce= () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajouter le code pour gérer l'envoi du formulaire (ajouter, modifier, supprimer)
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-lg ">
      <h2 className="text-2xl font-bold mb-6 flex justify-center items-center ">Ajouter une nouvelle annonce</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Titre :
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-gray-700">
            Date :
          </label>
          <input
            type="date"
            id="date"
            name="date"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description :
          </label>
          <textarea
            id="description"
            name="description"
            rows="4"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">
            Image :
          </label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md"
          > Ajouter
           
          </button>
          <button
            type="button"
            className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-md"
          >
            Modifier
          </button>
          <button
            type="button"
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md"
          >
            Supprimer
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddAnnonce;
