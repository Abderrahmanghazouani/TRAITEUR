import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditAnnonce = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [message, setMessage] = useState('');
  const [inputs, setInputs] = useState({
    titre: '',
    date: '',
    description: '',
    image: ''
  });
  const [image, setImage] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs({ ...inputs, [name]: value });
  };

  const uploadAnnonce = async () => {
    const formData = new FormData();
    formData.append('_method', 'PUT');
    formData.append('titre', inputs.titre);
    formData.append('date', inputs.date);
    formData.append('description', inputs.description);
    if (image) {
      formData.append('image', image);
    }

    try {
      const response = await axios.post(`http://127.0.0.1:8000/api/annonceupdate/${id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
        withCredentials: true,
       
      });
      setMessage(response.data.message);
      setTimeout(() => {
        navigate('/annonce-list');
      }, 2000);
    } catch (error) {
      console.error("There was an error updating the annonce!", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await uploadAnnonce();
  };

  useEffect(() => {
    const getAnnonce = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/annonces/${id}`);
        if (response.data.annonce) {
          setInputs(response.data.annonce);
        }
      } catch (error) {
        console.error("There was an error fetching the annonce!", error);
      }
    };
    getAnnonce();
  }, [id]);

  return (
    <div className="container mx-auto mt-10 p-6 bg-white shadow-md rounded-lg max-w-lg">
      <h3 className="text-2xl font-bold mb-6 text-center">Edit Annonce</h3>
      {message && <p className="text-green-500 text-center mb-4"><b>{message}</b></p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="titre" className="block text-sm font-medium text-gray-700">Annonce Title</label>
          <input
            type="text"
            id="titre"
            name="titre"
            value={inputs.titre}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="block text-sm font-medium text-gray-700">Annonce Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={inputs.date}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            id="description"
            name="description"
            rows="3"
            value={inputs.description}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">Product Image</label>
          {inputs.image && <img src={`http://127.0.0.1:8000/storage/${inputs.image}`} alt="" className="mb-2 rounded-md" />}
          <input
            type="file"
            id="image"
            onChange={(e) => setImage(e.target.files[0])}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div className="flex justify-center">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default EditAnnonce;
