import BiryaniImg from "../../assets/pic-2.jpg";
import pic3 from "../../assets/pic-3.jpg";

const Nous = () => {
  return (
    <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8 bg-[#f7f1e9]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Première section */}
          <div className="md:flex md:justify-center">
            <div className="rounded-lg shadow-lg">
              <img
                src={BiryaniImg}
                alt="biryani img"
                className="max-w-lg mx-auto rounded-lg border border-black"
              />
            </div>
          </div>
          <div className="md:pr-10">
            <h1 className="text-3xl sm:text-4xl font-bold text-center md:text-left mb-6 font-mono">
              Qui sommes-nous?
            </h1>
            <div className="space-y-6 ">
              <p className="text-lg text-gray-800 font-serif">
                Chez <span className="font-bold">SAADI</span>, notre passion est d'aller au-delà de vos attentes pour créer des expériences exceptionnelles. Depuis notre création, nous nous sommes engagés à offrir à nos clients un service de qualité supérieure, une créativité sans limite et une attention méticuleuse aux détails.
              </p>
              <div>
                <h2 className="text-xl font-bold mb-4 text-center font-mono">Notre Mission</h2>
                <p className="text-lg text-gray-800 font-serif">
                  Chez SAADI, notre mission est simple : surpasser les attentes de nos clients à chaque occasion. Que ce soit à travers nos services de traiteur haut de gamme, nos événements sur mesure ou notre cuisine créative, nous nous efforçons toujours de créer des moments inoubliables qui laissent une impression durable.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Deuxième section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-10">
          <div className="md:pr-10">
            <div className="mb-6">
              <h2 className="text-xl font-bold mb-4 text-center font-mono">Notre Histoire</h2>
              <p className="text-lg text-gray-800 font-serif">
                Fondée en 2005, SAADI est née de la vision d'un groupe de passionnés de la gastronomie désireux de partager leur amour pour la cuisine avec le monde. Depuis lors, notre entreprise a connu une croissance constante, élargissant notre portefeuille de services et notre réputation dans l'industrie.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-4 text-center">Notre Équipe</h2>
              <p className="text-lg text-gray-800">
                Notre succès repose sur le talent, la dévotion et l'engagement de notre équipe. De nos chefs primés à nos professionnels du service attentionnés, chaque membre de SAADI partage une passion commune pour l'excellence et un engagement envers la satisfaction de nos clients.
              </p>
            </div>
          </div>
          <div className="md:flex md:justify-center">
            <div className="rounded-lg shadow-lg">
              <img
                src={pic3}
                alt="biryani img"
                className="max-w-lg mx-auto rounded-lg  border border-black"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nous;
