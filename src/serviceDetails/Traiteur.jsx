
import React, { useState, useEffect } from 'react';
import tr1 from "../assets/tr1.jpg";
import tr2 from "../assets/tr2.jpg";
import tr3 from "../assets/tr3.jpg";
import tr4 from "../assets/tr4.jpg";
import tr5 from "../assets/tr5.jpg";
import tr6 from "../assets/tr6.jpg";


const images = [
  tr1,
  tr2,
  tr3,
  tr4,
  tr5,
  tr6
];

function ImageSlider1() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex h-screen">
      <div className="w-1/2 flex justify-center items-center">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-[1000px] h-[500px] object-cover transition-all duration-1000 ease-in-out"
        />
      </div>
      <div className="w-1/2  flex flex-col justify-center items-center p-8 font-serif">
        <h1 className="text-4xl font-bold mb-4 text-[#FF9F01]">• Plat marocain  </h1>
        <p className="text-lg">
        Dans la cuisine marocain on peut ressentir la richesse culturelle du Maroc et l’identité de chacune de ses régions parmi toutes les saveurs que le Maroc a offrir ; il était difficile de faire un choix
        La cuisine marocaine est reconnue comme étant la plus riche des cuisines orientales. La délicatesse de ses recettes permet d’apprécier l’explosion de saveurs des épices dont elle est constituée.
        Les influences arabes et berbères de cette cuisine donnent naissance à de savoureux plats que le Chef Olivier Bearzatto revisite avec passion.
        Couscous, tajine, pastilla, tangia, … mettent en avant les arômes des épices (safran, coriandre, paprika, cumin…) sans oublier les herbes aromatiques (romarin, fenouil, thym, anis, basilic…).
        </p>
      </div>
    </div>
  );
};

function ImageSlider2() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex h-screen">
      <div className="w-1/2 flex flex-col justify-center items-center p-8 font-serif">
        <h1 className="text-4xl font-bold mb-4 text-[#FF9F01]">• Plat marocain  </h1>
        <p className="text-lg">
          Dans la cuisine marocain on peut ressentir la richesse culturelle du Maroc et l’identité de chacune de ses régions parmi toutes les saveurs que le Maroc a offrir ; il était difficile de faire un choix.
          La cuisine marocaine est reconnue comme étant la plus riche des cuisines orientales. La délicatesse de ses recettes permet d’apprécier l’explosion de saveurs des épices dont elle est constituée.
          Les influences arabes et berbères de cette cuisine donnent naissance à de savoureux plats que le Chef Olivier Bearzatto revisite avec passion.
          Couscous, tajine, pastilla, tangia, … mettent en avant les arômes des épices (safran, coriandre, paprika, cumin…) sans oublier les herbes aromatiques (romarin, fenouil, thym, anis, basilic…).
        </p>
      </div>
      <div className="w-1/2 flex justify-center items-center">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-[1000px] h-[500px] object-cover transition-all duration-1000 ease-in-out"
        />
      </div>
    </div>
  );
}

export default function Traiteur(){
        return (
            <>
            <div>
               <ImageSlider1/>
            </div>
            <div>
               <ImageSlider2/>
            </div>
            </>
        );
    }

