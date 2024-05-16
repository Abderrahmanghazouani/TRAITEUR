
import BiryaniImg from "../../assets/pic-2.jpg";
// import BgImg from "../../assets/vector3.png";


const Nous = () => {
//   const bgImage = {
//     backgroundImage: `url(${BgImg})`,
//     backgroundPosition: "center",
//     backgroundRepeat: "no-repeat",
//     backgroundSize: "cover",
//     height: "100%",
//     width: "100%",
//   };

  return (
    <>
      <div className="min-h-[550px] mt-5 ">
        <div className="min-h-[550px] flex justify-center items-center backdrop-blur-xl py-10 sm:py-0 ">
          <div
            data-aos="slide-up"
            data-aos-duration="300"
            className="container"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Image section */}
              <div className="flex justify-center items-center">
                <img
                  src={BiryaniImg}
                  alt="biryani img"
                  className="max-w-[430px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]"
                />
              </div>
              {/* text content section */}
              <div className="flex flex-col justify-center gap-6 sm:pt-0">
                <h1 className="text-3xl sm:text-4xl font-bold">
                  Qui sommes-nous?
                </h1>
                <p>
                Chez <b>SAADI</b>, notre passion est d'aller au-delà de vos attentes pour créer des expériences exceptionnelles. Depuis notre création, nous nous sommes engagés à offrir à nos clients un service de qualité supérieure, une créativité sans limite et une attention méticuleuse aux détails.
                </p>
                 <br />
                <p><b>Notre Mission</b></p>

                 <p>Chez SAADI, notre mission est simple : surpasser les attentes de nos clients à chaque occasion. Que ce soit à travers nos services de traiteur haut de gamme, nos événements sur mesure ou notre cuisine créative, nous nous efforçons toujours de créer des moments inoubliables qui laissent une impression durable.</p>
                 <br />
                 <p><b>Notre Histoire</b></p>

                 <p>Fondée en 2005,SAADI est née de la vision d'un groupe de passionnés de la gastronomie désireux de partager leur amour pour la cuisine avec le monde. Depuis lors, notre entreprise a connu une croissance constante, élargissant notre portefeuille de services et notre réputation dans l'industrie.</p>
                 <br />
                 <p><b>Notre Équipe</b></p>

                <p> Notre succès repose sur le talent, la dévotion et l'engagement de notre équipe. De nos chefs primés à nos professionnels du service attentionnés, chaque membre de SAADI partage une passion commune pour l'excellence et un engagement envers la satisfaction de nos clients.</p>
                 <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nous;