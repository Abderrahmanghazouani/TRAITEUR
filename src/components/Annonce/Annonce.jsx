// import  { useState } from 'react';

// const Annonce = () => {
//   const [title, setTitle] = useState('');
//   const [image, setImage] = useState(null);
//   const [description, setDescription] = useState('');
//   const [date, setDate] = useState('');

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     setImage(file);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Titre:', title);
//     console.log('Image:', image);
//     console.log('Description:', description);
//     console.log('Date:', date);
//     setTitle('');
//     setImage(null);
//     setDescription('');
//     setDate('');
//   };

//   return (
//     <form className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg" onSubmit={handleSubmit}>
//       <div className="mb-4">
//         <label htmlFor="title" className="block text-sm font-medium text-gray-700">
//           Titre :
//         </label>
//         <input
//           type="text"
//           id="title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           required
//           className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
//         />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="image" className="block text-sm font-medium text-gray-700">
//           Télécharger une image :
//         </label>
//         <input
//           type="file"
//           id="image"
//           accept="image/*"
//           onChange={handleImageChange}
//           required
//           className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
//         />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="description" className="block text-sm font-medium text-gray-700">
//           Description :
//         </label>
//         <textarea
//           id="description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           required
//           className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
//           rows="4"
//         />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="date" className="block text-sm font-medium text-gray-700">
//           Date :
//         </label>
//         <input
//           type="date"
//           id="date"
//           value={date}
//           onChange={(e) => setDate(e.target.value)}
//           required
//           className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
//         />
//       </div>
//       <div className="text-center">
//         <button
//           type="submit"
//           className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600"
//         >
//           Ajouter
//         </button>
//       </div>
//     </form>
//   );
// };

// export default Annonce;
