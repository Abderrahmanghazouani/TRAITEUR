import React from 'react';
import BiryaniImg from "../../assets/pic-2.jpg";

const AboutUs = () => {
  return (
    <>
      <div className="min-h-[550px] bg-[#f7f1e9]">
        <div className="min-h-[550px] flex justify-center items-center backdrop-blur-xl py-10 sm:py-0 ">
          <div
            data-aos="slide-up"
            data-aos-duration="300"
            className="container"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Image section */}
              <div>
                <img
                  src={BiryaniImg}
                  alt="biryani img"
                  loading="lazy" // Add lazy loading here
                  className="max-w-[430px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]"
                />
              </div>
              {/* text content section */}
              <div className="flex flex-col justify-center gap-6 sm:pt-0">
                <h1 className="text-3xl sm:text-4xl font-bold font-mono ">
                  Qui sommes-nous?
                </h1>
                <p className="text-sm text-gray-500 tracking-wide leading-5 font-serif">
                Chez <b>SAADI</b>, notre passion est d'aller au-delà de vos attentes pour créer des expériences exceptionnelles. Depuis notre création, nous nous sommes engagés à offrir à nos clients un service de qualité supérieure, une créativité sans limite et une attention méticuleuse aux détails.
                </p>
                <div>
                  <a href="/nous-details"><button className="bg-gradient-to-r from-primary to-secondary font-mono text-white py-2 px-4 rounded-lg shadow-xl hover:shadow-md">
                    Lire Plus
                  </button></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
