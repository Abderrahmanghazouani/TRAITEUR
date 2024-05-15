import React from 'react';
import Traiteur from "../../assets/pic-traiteur.jpg";
import Pastry from "../../assets/pastry1.jpg";
import florale from "../../assets/dec-florale.jpg";
import table from "../../assets/pic-5.jpg";
import service from "../../assets/service-plus.jpg";
import amenagement from "../../assets/amenagement.jpg";

const CelebrationImg = [
  {
    id: 1,
    img: Traiteur,
    name: 'TRAITEUR',
    description: 'Description du plat Biryani.',
  },
  {
    id: 2,
    img: Pastry,
    name: 'PÂTISSERIE',
    description: 'Description du plat Chicken Curry.',
  },
  {
    id: 3,
    img: amenagement,
    name: 'AMENAGEMENT',
    description: 'Description de la boisson Cold Coffee.',
  },
  {
    id: 4,
    img: florale,
    name: 'DECORATION FLORALE',
    description: 'Description du plat Pasta.',
  },
  {
    id: 5,
    img: table,
    name: 'ART DE LA TABLE',
    description: 'Description de la salade.',
  },
  {
    id: 6,
    img: service,
    name: 'AUTRE SERVICES',
    description: 'Description du smoothie.',
  },
];

const Celebration = () => {
  return (
    <div className="py-10 bg-red-100">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            NOS SERVICES
          </p>
          <h1 className="text-3xl font-bold">SERVICES</h1>
          <p className="text-sm  text-gray-500">
           Vous été à la recherche d’un traiteur pour un évènement à Marrakech ou partout au Maroc N Saadi évents 
          vous propose des menus adaptés à votre thème, vous envies et votre budget
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center">
          {CelebrationImg.map((service) => (
            <div key={service.id} className="rounded-lg bg-white shadow-md hover:shadow-lg transition duration-300 ease-in-out" style={{ width: '280px', height: '280px' }}>
              <div className="h-48 overflow-hidden">
                <img src={service.img} alt={service.name} className="w-full h-full object-cover" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="p-4">
                <h2 className="text-lg font-semibold text-center">{service.name}</h2>
                {/* <p className="text-sm text-gray-600">{service.description}</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Celebration;


