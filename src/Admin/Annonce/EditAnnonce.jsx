import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditAnnonce = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [message, setMessage] = useState('');
  const [imagePreview, setImagePreview] = useState(null);
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

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  return (
    <div className="container mx-auto mt-10 p-6 shadow-md rounded-lg max-w-lg border border-black bg-[#E3DAC9] mb-6">
      <h3 className="text-2xl font-bold mb-6 text-center">Modifier l'annonce</h3>
      {message && <p className="text-green-500 text-center mb-4"><b>{message}</b></p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="titre" className="block text-lg text-black font-bold">Titre</label>
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
          <label htmlFor="date" className="block text-lg text-black font-bold">Date</label>
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
          <label htmlFor="description" className="block text-lg text-black font-bold">Description</label>
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
        <div>
          <label htmlFor="image" className="block text-lg font-mono font-bold text-gray-900 mb-2">
            Image :
          </label>
          <div className="flex flex-col items-center justify-center w-full h-32 bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 cursor-pointer hover:border-gray-400 focus:border-blue-500 transition-all duration-200">
            <label
              htmlFor="image"
              className="flex flex-col items-center justify-center w-full h-full cursor-pointer"
            >
              <div className="flex flex-col items-center justify-center pt-7">
                <svg className="w-10 h-10 text-gray-600 group-hover:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7l9 9m0 0l9-9m-9 9V3"></path>
                </svg>
                <p className="text-sm text-gray-600 group-hover:text-gray-800 pt-1 tracking-wider">Sélectionnez une image</p>
              </div>
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </label>
          </div>
          {imagePreview && (
            <div className="mt-4">
              <img src={imagePreview} alt="Prévisualisation de l'image" className="rounded-md border border-gray-300" />
            </div>
          )}
        </div>
        <div className="flex justify-center">
          <button type="submit" className="bg-yellow-400 hover:bg-yellow-600 font-mono text-white font-bold py-2 px-4 rounded-md mt-6">Modifier</button>
        </div>
      </form>
    </div>
  );
};

export default EditAnnonce;
