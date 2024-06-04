import { useState, useEffect } from 'react';
import bgImg1 from "../../assets/pic-4.jpg";
import bgImg2 from "../../assets/pic-2.jpg";
import bgImg3 from "../../assets/pic-3.jpg";

const Accueil = () => {
  const [bgImages, setBgImages] = useState([bgImg1, bgImg2, bgImg3]);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [bgImages.length]);

  const bgImageStyle = {
    backgroundImage: `url(${bgImages[currentBgIndex]})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    margin: "20px", // Espace autour de l'image
    minHeight: "calc(100vh - 20px)", // Hauteur moins la marge
    display: "flex",
    justifyContent: "center",
    alignItems: "center", 
    textAlign: "center",
  };

  const containerStyle = {
    backgroundColor: "#f7f1e9", // Fond de couleur autour des images
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "calc(100vh - 20px)", // Hauteur moins la marge
    padding: "10px", // Espace autour des images
  };

  return (
    <>
      <div className='bg-[#f7f1e9]'>
        <div className="container" style={containerStyle}>
          <div
            data-aos="zoom-out"
            data-aos-duration="400"
            data-aos-once="true"
            className="rounded-lg drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] border-2  border-yellow-500"
            style={bgImageStyle}
          >
            <h1 className=" text-3xl font-bold mb-4 mx-10 text-transparent bg-black bg-opacity-70 text-center
             inline-block rounded-lg text-white border-double border-8 font-serif">
              Pour l’organisation d’un évènement personnel, faites appel aux professionnels traiteur
              <div className="flex flex-col">
                <span className="bg-clip-text text-5xl bg-red-950 text-red-900">
                  N SAADI 
                </span>
                <span className="bg-clip-text text-3xl text-transparent bg-gradient-to-r from-primary to-secondary">
                  EVENTS
                </span>
                afin de bénéficier du meilleur service 
              </div>
              <div className="flex justify-center gap-4 mb-4"> {/* Nouveau conteneur pour les boutons */}
                <a href="contact">
                  <button className=" font-mono bg-gradient-to-r from-primary to-secondary hover:scale-105 hover:border-2 hover:border-double duration-200 text-white py-2 px-4 rounded-lg text-lg">
                    Contactez-nous
                  </button>
                </a> 
                <a href="services">
                  <button className="font-mono bg-gradient-to-r from-primary to-secondary hover:scale-105 hover:border-2 hover:border-double duration-200 text-white py-2 px-4 rounded-lg text-lg">
                    Nos Services
                  </button>
                </a> 
              </div>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Accueil;
