import  { useState } from 'react';
// import { AxiosAdmin } from '../../api/axios';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddAnnonce = () => {

  const navigate = useNavigate();

  const [titre, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(''); // Pour le champ de fichier, utilisez null comme valeur initiale
  const[message, setMessage]= useState('');
  const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

  const uploadAnnonce= async()=>{
    console.log(image)
    const formData= new FormData();
    formData.append('titre', titre);
    formData.append('date', date);
    formData.append('description',description);
    formData.append('image', image);
    const responce= await axios.post("http://127.0.0.1:8000/api/annonces", formData, {
        headers:{'Content-Type':"multipart/form-data",
        'Accept': 'application/json',
        'X-CSRF-TOKEN': csrfToken,
        },

        withXSRFToken: true,
        withCredentials:true,
      
    } );
          if(responce){
          console.log(responce)
          setMessage(responce.message); //"message": "Product successfully created."
          setTimeout(()=>{
              navigate('/annonce-list');
          }, 2000);
      }
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    await uploadAnnonce();
  }

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 flex justify-center items-center">Ajouter une nouvelle annonce</h2>
        <p className="text-warning">{ message}</p>  
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="titre" className="block text-sm font-medium text-gray-700">
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
          <label htmlFor="date" className="block text-sm font-medium text-gray-700">
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
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
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
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">
            Image :
          </label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
          >
            Ajouter
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddAnnonce;