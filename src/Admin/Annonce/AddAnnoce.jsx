import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddAnnonce = () => {
  const navigate = useNavigate();

  const [titre, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [message, setMessage] = useState('');
  const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

  const uploadAnnonce = async () => {
    const formData = new FormData();
    formData.append('titre', titre);
    formData.append('date', date);
    formData.append('description', description);
    formData.append('image', image);

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/annonces', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Accept': 'application/json',
          'X-CSRF-TOKEN': csrfToken,
        },
        withCredentials: true,
      });

      if (response.data) {
        setMessage('Annonce ajoutée avec succès !');
        setTimeout(() => {
          navigate('/annonce-list');
        }, 2000);
      }
    } catch (error) {
      setMessage('Erreur lors de l\'ajout de l\'annonce. Veuillez réessayer.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await uploadAnnonce();
  };

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
    <div className="max-w-lg mx-auto mt-10 p-6 bg-[#e3dac9] shadow-md rounded-lg border border-double border-black">
      <h2 className="text-2xl font-bold mb-6 flex justify-center items-center rounded-lg bg-white border border-black font-serif">
        Ajouter une nouvelle annonce
      </h2>
      {message && <p className="text-center text-green-500 font-bold mb-4">{message}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="titre" className="block text-lg font-bold text-gray-900 font-mono">
            Titre :
          </label>
          <input
            type="text"
            id="titre"
            name="titre"
            value={titre}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>
        <div>
          <label htmlFor="date" className="block text-lg font-bold text-gray-900 font-mono">
            Date :
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-lg font-bold text-gray-900 font-mono">
            Description :
          </label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="4"
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
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-600 font-mono text-white font-bold py-2 px-4 rounded-md"
          >
            Ajouter
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddAnnonce;
