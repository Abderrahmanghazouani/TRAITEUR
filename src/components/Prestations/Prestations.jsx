
// import Img from "../../assets/pexels-chevanon-323682.jpg";
import Img2 from "../../assets/pic-3.jpg";
// import Img3 from "../../assets/pexels-xmtnguyen-699953.jpg";
// import StarRatings from "react-star-ratings";


const CelebrationImg = [
  {
    id: 1,
    img: Img2,
    name: 'Biryani',
    description: 'Description du plat Biryani.',
  },
  {
    id: 2,
    img: Img2,
    name: 'Chicken Curry',
    description: 'Description du plat Chicken Curry.',
  },
  {
    id: 3,
    img: Img2,
    name: 'Cold Coffee',
    description: 'Description de la boisson Cold Coffee.',
  },
  {
    id: 4,
    img: Img2,
    name: 'Pasta',
    description: 'Description du plat Pasta.',
  },
  {
    id: 5,
    img: Img2,
    name: 'Salad',
    description: 'Description de la salade.',
  },
  {
    id: 6,
    img: Img2,
    name: 'Smoothie',
    description: 'Description du smoothie.',
  },
];

const Celebration = () => {
  return (
    <div className="py-10 bg-red-100">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Nos Prestations
          </p>
          <h1 className="text-3xl font-bold">Prestations</h1>
          <p className="text-xs text-gray-400">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis delectus architecto error nesciunt.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center">
          {CelebrationImg.map((service) => (
            <div key={service.id} className="rounded-lg bg-white shadow-md hover:shadow-lg transition duration-300 ease-in-out">
              <div className="h-48 overflow-hidden">
                <img src={service.img} alt={service.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-4 ">
                <h2 className="text-lg font-semibold">{service.name}</h2>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Celebration;

