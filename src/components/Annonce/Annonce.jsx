import { useState, useEffect } from "react";
import axios from "axios";

export default function Annonce() {
  const [annonce, setAnnonce] = useState([]);

  useEffect(() => {
    const getAnnonce = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/annonces");
        setAnnonce(response.data.annonces);
      } catch (error) {
        console.error("Error fetching annonces:", error);
      }
    };
    getAnnonce();
  }, []);

  return (
    <div className="container mx-auto mt-10 px-4 py-8 bg-white shadow-md rounded-lg">
      <h5 className="text-3xl font-bold mb-6 text-center text-[#FF9F01] mt-6">Liste des Nouvelles Annonces</h5>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {annonce.map((pdata, index) => (
          <div
            key={pdata.id}
            className="bg-gray-100 rounded-lg overflow-hidden shadow-md flex flex-col"
            style={{ width: '100%' }} // Ensure it takes the full width within its grid cell
          >
            <img
              src={`http://127.0.0.1:8000/storage/${pdata.image}`}
              alt=""
              className="h-64 w-full object-cover" // Adjust the height here (h-64)
            />
            <div className="p-6 flex-grow flex flex-col">
              <p className="font-bold text-xl mb-2">Numero: <span className="text-lg font-medium text-gray-700">{index + 1}</span></p>
              <h2 className="text-lg font-bold mb-2">Titre: <span className="text-lg font-medium">{pdata.titre}</span></h2>
              <p className="text-lg font-bold mb-2">Date: <span className="text-lg font-medium">{pdata.date}</span></p>
              <p className="text-lg font-bold mb-4">Description:</p>
              <div className="text-lg font-medium text-gray-700 bg-white p-4 rounded-lg shadow-inner min-h-32 whitespace-pre-line break-words">
                {pdata.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
