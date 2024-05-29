import Netoyage from "../assets/etoyage.jpg";
import Securite from "../assets/securite-2.jpg";
import Accueil from "../assets/accueil.jpg";

const services = [
  {
    title: 'ACCUEIL',
    description: 'Pour accueillir vos invités avec convivialité, SAADI EVENTS traiteur met à votre disposition des équipes dynamiques et qualifiées dotées d’une grande aisance relationnelle.',
    image: Accueil,
  },
  {
    title: 'NETOYAGE',
    description: 'Avec un service de nettoyage hors pair, SAADI EVENTS traiteur vous assure le maintien en propreté de vos espaces de réception grâce à un processus méthodique des tâches de nettoyage à accomplir. Avant, pendant et après votre événement, une chenille ouvrière de personnel de nettoyage veille à la propreté des lieux durant toute.',
    image: Netoyage,
  },
  {
    title: 'SÉCURITÉ',
    description: 'Afin de veiller à votre sécurité ainsi qu’à celle de vos convives, SAADI EVENTS Traiteur vous propose un service de sécurité aux compétences spécifiques et complet regroupant : Agents de sécurité, agents de contrôle, maîtres chiens et voituriers.',
    image: Securite,
  },
];

function Autre() {
  return (
    <div className="container mx-auto p-4 bg-[#f7f1e9] border border-black border-dotted">
      <h1 className="text-4xl font-bold text-center mb-8 font-mono">SERVICES PLUS</h1>
      <div className="flex flex-col md:flex-row justify-between gap-8">
        {services.map((service, index) => (
          <div key={index} className="flex-1 bg-white p-6 shadow-lg rounded-md flex flex-col justify-between  border border-black">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4 font-mono">{service.title}</h2>
              <p className="mb-6 text-gray-800 font-serif">{service.description}</p>
            </div>
            <img src={service.image} alt={service.title} className="w-full h-48 object-cover rounded-md mt-4 border border-black" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Autre;
