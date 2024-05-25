import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function AnnonceList() {
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

  const deleteAnnonce = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/annoncedelete/${id}`);
      alert("Successfully Deleted");
      setAnnonce(annonce.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting annonce:", error);
    }
  };

  return (
    <div className="container mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h5 className="text-2xl font-bold mb-4 text-center">Liste des Annonces</h5>
      <div className="overflow-x-auto bg-gray-100">
        <table className="w-full">
          <thead className="bg-[#e3dac9]">
            <tr>
              <th className="px-4 py-2 border font-bold">Sr.No</th>
              <th className="px-4 py-2 border font-bold">Titre</th>
              <th className="px-4 py-2 border font-bold">Date</th>
              <th className="px-4 py-2 border font-bold">Description</th>
              <th className="px-4 py-2 border font-bold">Image</th>
              <th className="px-4 py-2 border font-bold">Action</th>
            </tr>
          </thead>
          <tbody>
            {annonce.map((pdata, index) => (
              <tr key={pdata.id}>
                <td className="border px-4 py-2">{index + 1}</td>
                <td className="border px-4 py-2">{pdata.titre}</td>
                <td className="border px-4 py-2">{pdata.date}</td>
                <td className="border px-4 py-2">{pdata.description}</td>
                <td className="border px-4 py-2">
                  <img
                    src={`http://127.0.0.1:8000/storage/${pdata.image}`}
                    alt=""
                    className="h-10 w-16 object-cover"
                  />
                </td>
                <td className="border px-4 py-2">
                  <div className="flex">
                    <Link
                      to={`/editannonce/${pdata.id}/edit`}
                      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md mr-2 mb-2"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => deleteAnnonce(pdata.id)}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md mb-2"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AnnonceList;
