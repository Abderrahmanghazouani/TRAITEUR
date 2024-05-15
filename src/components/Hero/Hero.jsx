import bgImg from "../../assets/pic-3.jpg";

const Hero = () => {
  const bgImage = {
    backgroundImage: `url(${bgImg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    textAlign: "center",
  };

  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-950 dark:text-white duration-200" style={bgImage}>
        <div className="container">
          <div
            data-aos="zoom-out"
            data-aos-duration="400"
            data-aos-once="true"
            className="py-12"
          >
            <h1 className="text-3xl font-bold mb-4 text-transparent bg-black bg-opacity-70 inline-block px-4 py-2 rounded-lg text-white">
            Pour l’organisation d’un évènement personnel , faites appel aux professionnels 
   photos

              <div className="flex flex-col ">
                <span className="bg-clip-text text-5xl bg-white text-red-900 ">
                N SAADI 
                </span>
                <span className="bg-clip-text taxt-3xl text-transparent bg-gradient-to-r from-primary to-secondary ">
                 EVENTS
                </span>
                afin de bénéficier du meilleur service 
              </div>
            </h1>
            <div className="flex justify-center gap-4">
              <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-lg text-bold">
                Contactez-nous
              </button>
              <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-lg">
                Nos Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
