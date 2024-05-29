
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
    link: '/traiteur'
  },
  {
    id: 2,
    img: Pastry,
    name: 'PÂTISSERIE',
    description: 'Description du plat Chicken Curry.',
    link: '/patisserie'
  },
  {
    id: 3,
    img: amenagement,
    name: 'AMÉNAGEMENT',
  
    link: '/amenagement'
  },
  {
    id: 4,
    img: florale,
    name: 'DECORATION FLORALE',
  
    link: '/decoration-florale'
  },
  {
    id: 5,
    img: table,
    name: 'ART DE LA TABLE',
    description: 'Description de la salade.',
    link: '/art-de-la-table'
  },
  {
    id: 6,
    img: service,
    name: 'AUTRE SERVICES',
    description: 'Description du smoothie.',
    link: '/autres-services'
  },
];

const Celebration = () => {
  return (
    <div className="py-10 bg-[#f7f1e9] border border-dotted border-black">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <p className="text-3xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary font-mono">
            NOS SERVICES
          </p>
          <p className="text-lg font-bold  text-gray-500 font-serif ">
           Vous êtes à la recherche d’un traiteur pour un évènement à Marrakech ou partout au Maroc N Saadi évents vous propose des menus adaptés à votre thème, vos envies et votre budget
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center font-mono">
          {CelebrationImg.map((service) => (
            <a key={service.id} href={service.link}>
              <div className="rounded-lg bg-white shadow-md transition duration-300 ease-in-out transform hover:scale-105 border hover:border-black hover:bg-[#e3dac9] hover:text-yellow-500" style={{ width: '280px', height: '280px' }}>
                <div className="h-48 overflow-hidden">
                  <img src={service.img} alt={service.name} loading='lazy' className="w-full h-full object-cover" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-center">{service.name}</h2>
                  {/* <p className="text-sm text-gray-600">{service.description}</p> */}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Celebration;
